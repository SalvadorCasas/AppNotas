from django.db import models
from apps.users.models import User
import random

# Create your models here.

class Notes (models.Model):

    def create_new_ref_number():
        not_unique = True
        while not_unique:
            unique_ref = random.randint(1000000000, 9999999999)
            if not Notes.objects.filter(reference_number=unique_ref):
                not_unique = False
        return str(unique_ref)

    #atributos
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    reference_number=models.CharField(max_length=10, blank=True, editable=False, unique=True, default=create_new_ref_number, verbose_name='Número de referencia')
    title=models.CharField(max_length=50, verbose_name='Título')
    description=models.CharField(max_length=200, verbose_name='Descripción')
    state=models.CharField(max_length=50, verbose_name='Estado')
    creation_date=models.DateField(verbose_name='Fecha de creación')
    deadline=models.DateField(verbose_name='Fecha de finalización')


    
    class Meta:
        verbose_name = 'Nota'
        verbose_name_plural = 'Notas'
    
    def __str__(self) -> str:
        return self.reference_number