from django.db import models

# Create your models here.

class User (models.Model):

    # atributos 

    name=models.CharField(max_length=50, verbose_name='Nombre')
    last_name=models.CharField(max_length=50, verbose_name='Apellido')
    username=models.CharField(max_length=50, unique=True, verbose_name='Nombre de usuario')
    password=models.CharField(max_length=30, verbose_name='Contraseña')
    email=models.EmailField(unique=True, verbose_name='Email')

    class Meta:
            verbose_name = 'Usuario'
            verbose_name_plural = 'Usuarios'

    def __str__(self):
            return f'{self.name} {self.last_name}'
    