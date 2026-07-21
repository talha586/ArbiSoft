from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

from .models import Review


class ReviewCrudApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.review = Review.objects.create(
            game='Cyberpunk 2077',
            email='player@example.com',
            review='Great story and atmosphere.'
        )

    def test_list_reviews(self):
        response = self.client.get('/api/reviews/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.json()), 1)

    def test_create_review(self):
        payload = {
            'game': 'Portal 2',
            'email': 'tester@example.com',
            'review': 'A brilliant puzzle game.'
        }
        response = self.client.post('/api/reviews/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.json()['game'], payload['game'])

    def test_update_review(self):
        payload = {'game': 'The Witcher 3', 'email': 'player@example.com', 'review': 'Updated review'}
        response = self.client.put(f'/api/reviews/{self.review.id}/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()['review'], payload['review'])

    def test_delete_review(self):
        response = self.client.delete(f'/api/reviews/{self.review.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Review.objects.filter(id=self.review.id).exists())
