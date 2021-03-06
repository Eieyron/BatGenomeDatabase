# Generated by Django 3.2 on 2021-08-23 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Taxonomy', '0003_auto_20210823_0546'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='class',
            options={'verbose_name_plural': 'Classes'},
        ),
        migrations.AlterModelOptions(
            name='class_child',
            options={'verbose_name_plural': 'Class_Children'},
        ),
        migrations.AlterModelOptions(
            name='domain',
            options={'verbose_name_plural': 'Domain'},
        ),
        migrations.AlterModelOptions(
            name='domain_child',
            options={'verbose_name_plural': 'Domain_Children'},
        ),
        migrations.AlterModelOptions(
            name='family',
            options={'verbose_name_plural': 'Families'},
        ),
        migrations.AlterModelOptions(
            name='family_child',
            options={'verbose_name_plural': 'Family_Children'},
        ),
        migrations.AlterModelOptions(
            name='genus',
            options={'verbose_name_plural': 'Genera'},
        ),
        migrations.AlterModelOptions(
            name='genus_child',
            options={'verbose_name_plural': 'Genus_Children'},
        ),
        migrations.AlterModelOptions(
            name='order_child',
            options={'verbose_name_plural': 'Order_Children'},
        ),
        migrations.AlterModelOptions(
            name='phylum',
            options={'verbose_name_plural': 'Phyla'},
        ),
        migrations.AlterModelOptions(
            name='phylum_child',
            options={'verbose_name_plural': 'Phylum_Children'},
        ),
        migrations.AlterModelOptions(
            name='species',
            options={'verbose_name_plural': 'Species'},
        ),
        migrations.AlterField(
            model_name='class',
            name='IJSEM_list',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='nomenclature_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='notes',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='proposed_as',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='publication',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='publication_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='reference_list',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='class',
            name='taxonomic_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='IJSEM_list',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='nomenclature_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='notes',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='proposed_as',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='publication',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='publication_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='reference_list',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='family',
            name='taxonomic_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='IJSEM_list',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='nomenclature_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='notes',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='proposed_as',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='publication',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='publication_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='reference_list',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='taxonomic_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='IJSEM_list',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='emendation',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='etymology',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='nomenclature_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='notes',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='proposed_as',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='publication',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='publication_status',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='reference_list',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='phylum',
            name='taxonomic_status',
            field=models.CharField(max_length=150, null=True),
        ),
    ]
