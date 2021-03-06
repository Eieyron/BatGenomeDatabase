# Generated by Django 3.2 on 2021-08-23 11:33

import Strain.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Strain', '0003_auto_20210518_0752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='strain',
            name='medium',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='medium_composition',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='medium_growth',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='reference_list',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='scientific_name',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='temperature',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='temperature_range',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='temperature_type',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='strain',
            name='type_strain',
            field=models.FileField(null=True, upload_to=Strain.models.get_strain_upload_path),
        ),
    ]
