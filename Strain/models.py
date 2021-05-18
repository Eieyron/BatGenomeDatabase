from django.db import models
from Taxonomy.models import Domain, Phylum, Class, Order, Family, Genus, Species

class Strain(models.Model):

    name = models.CharField(max_length=256)
    type_strain = models.BooleanField()
    scientific_name = models.CharField(max_length=256)
    medium = models.CharField(max_length=256)
    medium_growth = models.BooleanField()
    medium_composition = models.CharField(max_length = 256)
    temperature = models.FloatField()
    temperature_type = models.CharField(max_length = 256)
    temperature_range = models.CharField(max_length = 256)
    reference_list  =  models.JSONField()
    
    # Taxonomic details
    domain = models.ForeignKey(Domain, on_delete=models.CASCADE, null=True)
    phylum = models.ForeignKey(Phylum, on_delete=models.CASCADE, null=True)
    class_name = models.ForeignKey(Class, on_delete=models.CASCADE, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    family = models.ForeignKey(Family, on_delete=models.CASCADE, null=True)
    genus = models.ForeignKey(Genus, on_delete=models.CASCADE, null=True)
    species = models.ForeignKey(Species, on_delete=models.CASCADE, null=True)
    

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

