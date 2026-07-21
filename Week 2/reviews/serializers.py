from rest_framework import serializers
from .models import Review, User

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Review
        fields = ['id', 'user', 'game', 'email', 'review', 'created_at']