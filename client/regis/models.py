from django.db import models

# Create your models here.
class Users(models.Model):
    email = models.CharField(max_length=30, primary_key=True)
    password = models.CharField(max_length=30)
    def __str__(self):
        return self.email

