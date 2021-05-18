from django.db import models
from django.db.models.fields.related import OneToOneField

class Domain(models.Model):

    name = models.CharField(max_length=256)
    etymology = models.CharField(max_length=256)

    # taxonomic details
    proposed_as = models.CharField(max_length = 150)
    publication = models.CharField(max_length = 150)
    publication_status = models.CharField(max_length = 150)
    IJSEM_list = models.CharField(max_length = 150)
    notes = models.CharField(max_length = 150)
    reference_list = models.JSONField()
    nomenclature_status = models.CharField(max_length = 150)
    taxonomic_status = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

class Phylum(models.Model):

    name = models.CharField(max_length=256)
    etymology = models.CharField(max_length=256)
    emendation = models.CharField(max_length = 150)
    parent = models.ForeignKey(Domain, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 150)
    publication = models.CharField(max_length = 150)
    publication_status = models.CharField(max_length = 150)
    IJSEM_list = models.CharField(max_length = 150)
    notes = models.CharField(max_length = 150)
    reference_list = models.JSONField()
    nomenclature_status = models.CharField(max_length = 150)
    taxonomic_status = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

class Class(models.Model):

    name = models.CharField(max_length=256)
    etymology = models.CharField(max_length=256)
    gender = models.CharField(max_length = 150)
    parent = models.ForeignKey(Phylum, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 150)
    publication = models.CharField(max_length = 150)
    publication_status = models.CharField(max_length = 150)
    IJSEM_list = models.CharField(max_length = 150)
    notes = models.CharField(max_length = 150)
    reference_list = models.JSONField()
    nomenclature_status = models.CharField(max_length = 150)
    taxonomic_status = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

class Order(models.Model):

    name = models.CharField(max_length=256)
    etymology = models.CharField(max_length=256)
    gender = models.CharField(max_length = 150)
    parent = models.ForeignKey(Class, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 150)
    publication = models.CharField(max_length = 150)
    publication_status = models.CharField(max_length = 150)
    IJSEM_list = models.CharField(max_length = 150)
    notes = models.CharField(max_length = 150)
    reference_list = models.JSONField()
    nomenclature_status = models.CharField(max_length = 150)
    taxonomic_status = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

class Family(models.Model):

    name = models.CharField(max_length=256)
    etymology = models.CharField(max_length=256)
    gender = models.CharField(max_length = 150)
    parent = models.ForeignKey(Order, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 150)
    publication = models.CharField(max_length = 150)
    publication_status = models.CharField(max_length = 150)
    IJSEM_list = models.CharField(max_length = 150)
    notes = models.CharField(max_length = 150)
    reference_list = models.JSONField()
    nomenclature_status = models.CharField(max_length = 150)
    taxonomic_status = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

class Genus(models.Model):

    name = models.CharField(max_length=256)
    etymology = models.CharField(max_length=256)
    gender = models.CharField(max_length = 150)
    rna_gene = models.CharField(max_length = 2056)
    parent = models.ForeignKey(Family, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 150)
    publication = models.CharField(max_length = 150)
    publication_status = models.CharField(max_length = 150)
    IJSEM_list = models.CharField(max_length = 150)
    notes = models.CharField(max_length = 150)
    reference_list = models.JSONField()
    nomenclature_status = models.CharField(max_length = 150)
    taxonomic_status = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

class Species(models.Model):

    name = models.CharField(max_length=256)
    basonym = models.CharField(max_length = 150)
    etymology = models.CharField(max_length=256)
    gender = models.CharField(max_length = 150)
    rna_gene = models.CharField(max_length = 2056)
    parent = models.ForeignKey(Genus, on_delete=models.CASCADE)

    # taxonomic details
    proposed_as = models.CharField(max_length = 150)
    publication = models.CharField(max_length = 150)
    publication_status = models.CharField(max_length = 150)
    IJSEM_list = models.CharField(max_length = 150)
    notes = models.CharField(max_length = 150)
    reference_list = models.JSONField()
    nomenclature_status = models.CharField(max_length = 150)
    taxonomic_status = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

class Domain_Child(models.Model):

    domain_parent = models.ForeignKey(Domain, on_delete=models.CASCADE)
    phylum_child = models.ForeignKey(Phylum, on_delete=models.CASCADE)

class Phylum_Child(models.Model):

    phylum_parent = models.ForeignKey(Phylum, on_delete=models.CASCADE)
    class_child = models.ForeignKey(Class, on_delete=models.CASCADE)

class Class_Child(models.Model):

    class_parent = models.ForeignKey(Class, on_delete=models.CASCADE)
    order_child = models.ForeignKey(Order, on_delete=models.CASCADE)

class Order_Child(models.Model):

    order_parent = models.ForeignKey(Order, on_delete=models.CASCADE)
    family_child = models.ForeignKey(Family, on_delete=models.CASCADE)

class Family_Child(models.Model):

    family_parent = models.ForeignKey(Family, on_delete=models.CASCADE)
    genus_child = models.ForeignKey(Genus, on_delete=models.CASCADE)

class Genus_Child(models.Model):

    genus_parent = models.ForeignKey(Genus, on_delete=models.CASCADE)
    species_child = models.ForeignKey(Species, on_delete=models.CASCADE)