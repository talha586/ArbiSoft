import pytest
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from rest_framework import status
from rest_framework.test import APIClient

from .models import Review, User


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def review_user(db):
    return User.objects.create(username="tester", email="tester@example.com")


@pytest.fixture
def review_instance(review_user):
    return Review.objects.create(
        user=review_user,
        game="Cyberpunk 2077",
        email="player@example.com",
        review="Great story and atmosphere.",
    )


@pytest.mark.django_db
def test_obtain_jwt_token_for_valid_credentials(api_client):
    user = get_user_model().objects.create_user(
        username="jwtuser",
        password="StrongPass123",
    )

    response = api_client.post(
        "/api/token/",
        {"username": user.username, "password": "StrongPass123"},
        format="json",
    )

    assert response.status_code == status.HTTP_200_OK
    assert "access" in response.json()
    assert "refresh" in response.json()


@pytest.mark.django_db
def test_create_and_retrieve_review(api_client, review_user):
    payload = {
        "user": review_user.id,
        "game": "Portal 2",
        "email": "tester@example.com",
        "review": "A brilliant puzzle game.",
    }

    create_response = api_client.post("/api/reviews/", payload, format="json")
    assert create_response.status_code == status.HTTP_201_CREATED

    review_id = create_response.json()["id"]
    get_response = api_client.get(f"/api/reviews/{review_id}/")

    assert get_response.status_code == status.HTTP_200_OK
    assert get_response.json()["game"] == payload["game"]


@pytest.mark.django_db
def test_update_review(api_client, review_user, review_instance):
    payload = {
        "user": review_user.id,
        "game": "The Witcher 3",
        "email": "player@example.com",
        "review": "Updated review",
    }

    response = api_client.put(
        f"/api/reviews/{review_instance.id}/", payload, format="json"
    )

    assert response.status_code == status.HTTP_200_OK
    assert response.json()["review"] == payload["review"]
    assert response.json()["game"] == payload["game"]


@pytest.mark.django_db
def test_delete_review(api_client, review_user, review_instance):
    moderator_group, _ = Group.objects.get_or_create(name="moderator")
    moderator_user = get_user_model().objects.create_user(
        username="moderator-delete",
        password="StrongPass123",
    )
    moderator_user.groups.add(moderator_group)
    api_client.force_authenticate(user=moderator_user)

    response = api_client.delete(f"/api/reviews/{review_instance.id}/")

    assert response.status_code == status.HTTP_204_NO_CONTENT
    assert not Review.objects.filter(id=review_instance.id).exists()


@pytest.mark.django_db
def test_create_review_with_invalid_data(api_client, review_user):
    payload = {
        "user": review_user.id,
        "game": "",
        "email": "not-an-email",
        "review": "   ",
    }

    response = api_client.post("/api/reviews/", payload, format="json")

    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert "game" in response.json()
    assert "email" in response.json()
    assert "review" in response.json()


@pytest.mark.django_db
def test_happy_path_auth_and_review_flow(api_client):
    auth_user = get_user_model().objects.create_user(
        username="integrationuser",
        password="StrongPass123",
    )

    token_response = api_client.post(
        "/api/token/",
        {"username": auth_user.username, "password": "StrongPass123"},
        format="json",
    )
    assert token_response.status_code == status.HTTP_200_OK

    access_token = token_response.json()["access"]
    api_client.credentials(HTTP_AUTHORIZATION=f"Bearer {access_token}")

    review_user = User.objects.create(
        username="reviewer",
        email="reviewer@example.com",
    )
    review_payload = {
        "user": review_user.id,
        "game": "Hades",
        "email": "integration@example.com",
        "review": "Excellent pacing and music.",
    }
    create_response = api_client.post("/api/reviews/", review_payload, format="json")
    assert create_response.status_code == status.HTTP_201_CREATED

    review_id = create_response.json()["id"]
    get_response = api_client.get(f"/api/reviews/{review_id}/")

    assert get_response.status_code == status.HTTP_200_OK
    assert get_response.json()["game"] == review_payload["game"]
    assert get_response.json()["review"] == review_payload["review"]
