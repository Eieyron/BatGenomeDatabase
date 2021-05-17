from django.db import models

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
    
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Strain_detail", kwargs={"pk": self.pk})

