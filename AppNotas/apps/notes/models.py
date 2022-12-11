from django.db import models

# Create your models here.

class Notes (models.Model):
    title=models.CharField(max_length=50, verbose_name='Title')
    description=models.CharField(max_length=200, verbose_name='Description')
    state=models.CharField(max_length=50, verbose_name='State')
    creation_date=models.DateField(verbose_name='Creation_Date')
    deadline=models.DateField(verbose_name='Deadline')