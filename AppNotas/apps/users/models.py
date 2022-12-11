from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

# Create your models here.


class UserManager(BaseUserManager):
    def _create_user(self, username, email, name,last_name, password, is_staff, is_superuser, **extra_fields):
        user = self.model(
            username = username,
            email = email,
            name = name,
            last_name = last_name,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email, name,last_name, password=None, **extra_fields):
        return self._create_user(username, email, name,last_name, password, False, False, **extra_fields)

    def create_superuser(self, username, email, name,last_name, password=None, **extra_fields):
        return self._create_user(username, email, name,last_name, password, True, True, **extra_fields)

class User (AbstractBaseUser,PermissionsMixin):

    # atributos 

    name=models.CharField(max_length=50, verbose_name='Nombre')
    last_name=models.CharField(max_length=50, verbose_name='Apellido')
    username=models.CharField(max_length=50, unique=True, verbose_name='Nombre de usuario')
    password=models.CharField(max_length=30, verbose_name='Contraseña')
    email=models.EmailField(unique=True, verbose_name='Email')
    is_staff= models.BooleanField(default=False)
    object=UserManager()

    class Meta:
            verbose_name = 'Usuario'
            verbose_name_plural = 'Usuarios'

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','name','last_name']

    def __str__(self):
            return f'{self.name} {self.last_name}'
    