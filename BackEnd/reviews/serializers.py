from rest_framework import serializers
from .models import Review, User


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Review
        fields = ["id", "user", "game", "email", "review", "created_at"]

    def validate_game(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Game name is required.")
        return value.strip()

    def validate_email(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Email is required.")
        return value.strip()

    def validate_review(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Review text is required.")
        return value.strip()
