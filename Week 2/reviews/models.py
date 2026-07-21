from django.db import models

class Review(models.Model):
    game = models.CharField(max_length=255)
    email = models.EmailField()
    review = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.game} - {self.email}'
    