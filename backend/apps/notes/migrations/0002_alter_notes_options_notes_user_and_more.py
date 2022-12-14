# Generated by Django 4.1.4 on 2022-12-11 22:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notes',
            options={'verbose_name': 'Nota', 'verbose_name_plural': 'Notas'},
        ),
        migrations.AddField(
            model_name='notes',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='notes',
            name='creation_date',
            field=models.DateField(verbose_name='Fecha de creación'),
        ),
        migrations.AlterField(
            model_name='notes',
            name='deadline',
            field=models.DateField(verbose_name='Fecha de finalización'),
        ),
        migrations.AlterField(
            model_name='notes',
            name='description',
            field=models.CharField(max_length=200, verbose_name='Descripción'),
        ),
        migrations.AlterField(
            model_name='notes',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='notes',
            name='state',
            field=models.CharField(max_length=50, verbose_name='Estado'),
        ),
        migrations.AlterField(
            model_name='notes',
            name='title',
            field=models.CharField(max_length=50, verbose_name='Título'),
        ),
    ]
