from django.db import models
# Create your models here.

class User (models.Model):
    name=models.CharField(max_length=50, verbose_name='Name')
    surname=models.CharField(max_length=50, verbose_name='Surname')
    username=models.CharField(max_length=50, unique=True, verbose_name='Username')
    password=models.CharField(max_length=30, verbose_name='Password')
    email=models.EmailField(unique=True, verbose_name='Email')
