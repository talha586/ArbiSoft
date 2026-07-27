import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

FREETOGAME_URL = "https://www.freetogame.com/api/games"


@api_view(["GET"])
def games_list(request):
    response = requests.get(FREETOGAME_URL, timeout=10)
    games = response.json()

    genre = request.GET.get("genre")
    if genre:
        games = [g for g in games if g.get("genre") == genre]

    return Response(games)


@api_view(["GET"])
def genres_list(request):
    response = requests.get(FREETOGAME_URL, timeout=10)
    games = response.json()
    genres = sorted({g["genre"] for g in games if g.get("genre")})
    return Response(genres)
