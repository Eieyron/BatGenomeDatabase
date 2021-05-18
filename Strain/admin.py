from django.contrib import admin
from .models import Strain

# Register your models here.
admin.site.register(Strain)

admin.site.site_header = 'Bat Gut Bacterial Genome Database'