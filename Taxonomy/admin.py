from django.contrib import admin
from .models import Domain, Phylum, Order, Class, Family, Genus, Species, Domain_Child, Phylum_Child, Order_Child, Class_Child, Family_Child, Genus_Child, Species_Child

# Register your models here.
admin.site.register(Domain)
admin.site.register(Phylum)
admin.site.register(Class)
admin.site.register(Order)
admin.site.register(Family)
admin.site.register(Genus)
admin.site.register(Species)
admin.site.register(Domain_Child)
admin.site.register(Phylum_Child)
admin.site.register(Class_Child)
admin.site.register(Order_Child)
admin.site.register(Family_Child)
admin.site.register(Genus_Child)
admin.site.register(Species_Child)
