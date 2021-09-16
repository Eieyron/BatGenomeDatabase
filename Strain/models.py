from django.db import models
from Taxonomy.models import Domain, Phylum, Class, Order, Family, Genus, Species
import os

def get_strain_upload_path(instance, filename):
    return os.path.join(
        'strain_rna',
        instance.strain_name,
        filename
    )

class Strain(models.Model):

    strain_name = models.CharField(max_length=256)
    type_strain = models.FileField(upload_to=get_strain_upload_path, max_length = 100, null=True)
    scientific_name = models.CharField(max_length=1024, null=True)
    medium = models.CharField(max_length=1024, null=True)
    medium_growth = models.BooleanField(null=True)
    medium_composition = models.CharField(max_length = 1024, null=True)
    temperature = models.FloatField(null=True)
    temperature_type = models.CharField(max_length = 1024, null=True)
    temperature_range = models.CharField(max_length = 1024, null=True)
    reference_list  =  models.JSONField(null=True)
    
    # Taxonomic details
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE, null=True)
    phylum = models.ForeignKey(Phylum, on_delete=models.CASCADE, null=True)
    class_name = models.ForeignKey(Class, on_delete=models.CASCADE, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    family = models.ForeignKey(Family, on_delete=models.CASCADE, null=True)
    genus = models.ForeignKey(Genus, on_delete=models.CASCADE, null=True)
    species = models.ForeignKey(Species, on_delete=models.CASCADE, null=True)
    

    def __str__(self):
        return self.strain_name

