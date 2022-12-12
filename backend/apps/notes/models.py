from django.db import models
from apps.users.models import User

# Create your models here.


class Notes (models.Model):

    #atributos
    user = models.ForeignKey(
        User, null = True,
        on_delete=models.CASCADE,
        blank=True,
        related_name="content_%(class)s"
    )
    title=models.CharField(max_length=50, verbose_name='Título')
    description=models.CharField(max_length=200, verbose_name='Descripción')
    creation_date=models.DateTimeField(auto_now_add=True, blank=True, verbose_name='Fecha de creación')
    
    class Meta:
        verbose_name = 'Nota'
        verbose_name_plural = 'Notas'
    