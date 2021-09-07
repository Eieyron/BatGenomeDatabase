from django.db import models
from django.db.models.fields.related import OneToOneField
from django.urls import reverse 

import os

class Domain(models.Model):

    class Meta:
        verbose_name_plural = "Domain"

    category_name = models.CharField(max_length=256)
    scientific_name = models.CharField(max_length=1024)
    etymology = models.CharField(max_length=1024)

    # taxonomic details
    proposed_as = models.CharField(max_length = 1024)
    publication = models.CharField(max_length = 1024)
    publication_status = models.CharField(max_length = 1024, default="none")
    IJSEM_list = models.CharField(max_length = 1024, default="none")
    notes = models.CharField(max_length = 1024, default="none")
    reference_list = models.JSONField(null=True)
    nomenclature_status = models.CharField(max_length = 1024, default="none")
    taxonomic_status = models.CharField(max_length = 1024, default="none")
    
    def __str__(self):
        return self.scientific_name

    def get_absolute_url(self):
        return "tax/domain/"+str(self.id)+"/"
    #     return reverse("DomainViewSet", kwargs={'id':self.id})

class Phylum(models.Model):

    class Meta:
        verbose_name_plural = "Phyla"

    category_name = models.CharField(max_length=256)
    scientific_name = models.CharField(max_length=1024)
    etymology = models.CharField(max_length=1024, null=True)
    emendation = models.CharField(max_length = 1024, null=True)
    parent = models.ForeignKey(Domain, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 1024, null=True)
    publication = models.CharField(max_length = 1024, null=True)
    publication_status = models.CharField(max_length = 150, null=True)
    IJSEM_list = models.CharField(max_length = 1024, null=True)
    notes = models.CharField(max_length = 1024, null=True)
    reference_list = models.JSONField(null=True)
    nomenclature_status = models.CharField(max_length = 1024, null=True)
    taxonomic_status = models.CharField(max_length = 1024, null=True)
    
    def __str__(self):
        return self.scientific_name


class Class(models.Model):

    class Meta:
        verbose_name_plural = "Classes"

    category_name = models.CharField(max_length=256)
    scientific_name = models.CharField(max_length=1024)
    etymology = models.CharField(max_length=1024)
    gender = models.CharField(max_length = 1024)
    parent = models.ForeignKey(Phylum, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 1024, null=True)
    publication = models.CharField(max_length = 1024, null=True)
    publication_status = models.CharField(max_length = 1024, null=True)
    IJSEM_list = models.CharField(max_length = 1024, null=True)
    notes = models.CharField(max_length = 1024, null=True)
    reference_list = models.JSONField(null=True)
    nomenclature_status = models.CharField(max_length = 1024, null=True)
    taxonomic_status = models.CharField(max_length = 1024, null=True)
    
    def __str__(self):
        return self.scientific_name

class Order(models.Model):

    category_name = models.CharField(max_length=256)
    scientific_name = models.CharField(max_length=1024)
    etymology = models.CharField(max_length=1024)
    gender = models.CharField(max_length = 1024)
    parent = models.ForeignKey(Class, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 1024, null=True)
    publication = models.CharField(max_length = 1024, null=True)
    publication_status = models.CharField(max_length = 1024, null=True)
    IJSEM_list = models.CharField(max_length = 1024, null=True)
    notes = models.CharField(max_length = 1024, null=True)
    reference_list = models.JSONField(null=True)
    nomenclature_status = models.CharField(max_length = 1024, null=True)
    taxonomic_status = models.CharField(max_length = 1024, null=True)
    
    def __str__(self):
        return self.scientific_name

class Family(models.Model):

    class Meta:
        verbose_name_plural = "Families"

    category_name = models.CharField(max_length=256)
    scientific_name = models.CharField(max_length=1024)
    etymology = models.CharField(max_length=1024)
    gender = models.CharField(max_length = 1024)
    parent = models.ForeignKey(Order, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 1024, null=True)
    publication = models.CharField(max_length = 1024, null=True)
    publication_status = models.CharField(max_length = 1024, null=True)
    IJSEM_list = models.CharField(max_length = 1024, null=True)
    notes = models.CharField(max_length = 1024, null=True)
    reference_list = models.JSONField(null=True)
    nomenclature_status = models.CharField(max_length = 1024, null=True)
    taxonomic_status = models.CharField(max_length = 1024, null=True)
    
    def __str__(self):
        return self.scientific_name

def get_upload_genus_path(instance, filename):
    return os.path.join(
        'genus_rna',
        instance.category_name,
        filename
    )

class Genus(models.Model):

    class Meta:
        verbose_name_plural = "Genera"

    category_name = models.CharField(max_length=256)
    scientific_name = models.CharField(max_length=1024)
    etymology = models.CharField(max_length=1024, null=True)
    gender = models.CharField(max_length = 1024, null=True)
    rna_gene = models.FileField(upload_to=get_upload_genus_path, max_length = 256, null=True)
    parent = models.ForeignKey(Family, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 1024, null=True)
    publication = models.CharField(max_length = 1024, null=True)
    publication_status = models.CharField(max_length = 1024, null=True)
    IJSEM_list = models.CharField(max_length = 1024, null=True)
    notes = models.CharField(max_length = 1024, null=True)
    reference_list = models.JSONField(null=True)
    nomenclature_status = models.CharField(max_length = 1024, null=True)
    taxonomic_status = models.CharField(max_length = 1024, null=True)
    
    def __str__(self):
        return self.scientific_name

def get_upload_species_path(instance, filename):
    return os.path.join(
        'species_rna',
        instance.category_name,
        filename
    )

class Species(models.Model):

    class Meta:
        verbose_name_plural = "Species"

    category_name = models.CharField(max_length=256)
    scientific_name = models.CharField(max_length=1024)
    basonym = models.CharField(max_length = 1024, null=True)
    etymology = models.CharField(max_length=256, null=True)
    gender = models.CharField(max_length = 1024, null=True)
    rna_gene = models.FileField(upload_to=get_upload_species_path, max_length = 256, null=True)
    parent = models.ForeignKey(Genus, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 1024, null=True)
    publication = models.CharField(max_length = 1024, null=True)
    publication_status = models.CharField(max_length = 1024, null=True)
    IJSEM_list = models.CharField(max_length = 1024, null=True)
    notes = models.CharField(max_length = 1024, null=True)
    reference_list = models.JSONField(null=True)
    nomenclature_status = models.CharField(max_length = 1024, null=True)
    taxonomic_status = models.CharField(max_length = 1024, null=True)
    
    def __str__(self):
        return self.scientific_name

class Domain_Child(models.Model):

    class Meta:
        verbose_name_plural = "Domain_Children"

    domain_parent = models.ForeignKey(Domain, on_delete=models.CASCADE)
    phylum_child = models.ForeignKey(Phylum, on_delete=models.CASCADE)

    def __str__(self):
        return self.domain_parent.scientific_name

class Phylum_Child(models.Model):

    class Meta:
        verbose_name_plural = "Phylum_Children"

    phylum_parent = models.ForeignKey(Phylum, on_delete=models.CASCADE)
    class_child = models.ForeignKey(Class, on_delete=models.CASCADE)

    def __str__(self):
        return self.phylum_parent.scientific_name


class Class_Child(models.Model):

    class Meta:
        verbose_name_plural = "Class_Children"

    class_parent = models.ForeignKey(Class, on_delete=models.CASCADE)
    order_child = models.ForeignKey(Order, on_delete=models.CASCADE)

    def __str__(self):
        return self.class_parent.scientific_name

class Order_Child(models.Model):

    class Meta:
        verbose_name_plural = "Order_Children"

    order_parent = models.ForeignKey(Order, on_delete=models.CASCADE)
    family_child = models.ForeignKey(Family, on_delete=models.CASCADE)

    def __str__(self):
        return self.order_parent.scientific_name

class Family_Child(models.Model):

    class Meta:
        verbose_name_plural = "Family_Children"

    family_parent = models.ForeignKey(Family, on_delete=models.CASCADE)
    genus_child = models.ForeignKey(Genus, on_delete=models.CASCADE)

    def __str__(self):
        return self.family_parent.scientific_name

class Genus_Child(models.Model):

    class Meta:
        verbose_name_plural = "Genus_Children"

    genus_parent = models.ForeignKey(Genus, on_delete=models.CASCADE)
    species_child = models.ForeignKey(Species, on_delete=models.CASCADE)

    def __str__(self):
        return self.genus_parent.scientific_name

class Species_Child(models.Model):

    class Meta:
        verbose_name_plural = "Species_Children"

    species_parent = models.ForeignKey(Species, on_delete=models.CASCADE)
    strain_child = models.ForeignKey("Strain.Strain", on_delete=models.CASCADE)

    def __str__(self):
        return self.species_parent.scientific_name
