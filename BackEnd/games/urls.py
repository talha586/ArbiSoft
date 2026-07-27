from django.urls import path
from . import views

urlpatterns = [
    path("games/", views.games_list),
    path("genres/", views.genres_list),
]
