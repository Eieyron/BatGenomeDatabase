# Generated by Django 3.2 on 2021-05-17 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Strain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('type_strain', models.BooleanField()),
                ('scientific_name', models.CharField(max_length=256)),
                ('medium', models.CharField(max_length=256)),
                ('medium_growth', models.BooleanField()),
                ('medium_composition', models.CharField(max_length=256)),
                ('temperature', models.FloatField()),
                ('temperature_type', models.CharField(max_length=256)),
                ('temperature_range', models.CharField(max_length=256)),
            ],
        ),
    ]
