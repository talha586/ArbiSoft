from rest_framework import generics, permissions
from .models import Review
from .serializers import ReviewSerializer


class IsModeratorOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        if request.method == "DELETE":
            return bool(
                request.user
                and request.user.is_authenticated
                and request.user.groups.filter(name="moderator").exists()
            )

        return True


class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.all().order_by("-created_at")
    serializer_class = ReviewSerializer


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsModeratorOrReadOnly]
