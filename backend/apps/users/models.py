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

class User(AbstractBaseUser,PermissionsMixin):

    # atributos 

    username = models.CharField(default = None, max_length = 255, unique = True)
    email = models.EmailField(verbose_name='Correo Electrónico',max_length = 255, unique = True, default= None)
    name = models.CharField(verbose_name='Nombres', max_length = 255, blank = True, null = True)
    is_superuser = models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')
    last_name = models.CharField(blank=True, max_length=255, null=True, verbose_name='Apellidos')
    is_staff = models.BooleanField(default=False) 
    objects = UserManager()
                 


    class Meta:
            verbose_name = 'Usuario'
            verbose_name_plural = 'Usuarios'

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','name','last_name']

    def __unicode__(self):
            return self.username
    