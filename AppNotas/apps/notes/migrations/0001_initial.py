# Generated by Django 3.2.16 on 2022-12-11 03:17

from django.db import migrations, models
from django.utils import timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='Número de referencia')),
                ('title', models.CharField(default = None, max_length=50, verbose_name='Título')),
                ('description', models.CharField(default = None, max_length=200, verbose_name='Descripción')),
                ('creation_date', models.DateField(auto_now_add=True, default=timezone.now, verbose_name='Fecha de creación')),
            ],
        ),
    ]
