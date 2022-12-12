from django.db import models
from apps.users.models import User
import random

# Create your models here.

class Notes (models.Model):

    #atributos
    user = models.ForeignKey(
        User, default = None,
        on_delete=models.CASCADE
    )
    title=models.CharField(max_length=50, verbose_name='Título')
    description=models.CharField(max_length=200, verbose_name='Descripción')
    state=models.CharField(max_length=50, verbose_name='Estado')
    creation_date=models.DateField(verbose_name='Fecha de creación')
    deadline=models.DateField(verbose_name='Fecha de finalización')


    
    class Meta:
        verbose_name = 'Nota'
        verbose_name_plural = 'Notas'
    