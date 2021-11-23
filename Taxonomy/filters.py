from django_filters import rest_framework as filters
from .models import Domain, Phylum, Class, Order, Family, Genus, Species



class DomainFilter(filters.FilterSet):

    class Meta:
        model = Domain
        fields = {
            'id': ['icontains'],
            'category_name': ['icontains'],
            'scientific_name': ['icontains'],
        }

class PhylumFilter(filters.FilterSet):

    class Meta:
        model = Phylum
        fields = {
            'id': ['icontains'],
            'category_name': ['icontains'],
            'scientific_name': ['icontains'],
        }

class ClassFilter(filters.FilterSet):

    class Meta:
        model = Class
        fields = {
            'id': ['icontains'],
            'category_name': ['icontains'],
            'scientific_name': ['icontains'],
        }


class OrderFilter(filters.FilterSet):

    class Meta:
        model = Order
        fields = {
            'id': ['icontains'],
            'category_name': ['icontains'],
            'scientific_name': ['icontains'],
        }
# Create your views here.

class FamilyFilter(filters.FilterSet):

    class Meta:
        model = Family
        fields = {
            'id': ['icontains'],
            'category_name': ['icontains'],
            'scientific_name': ['icontains'],
        }

class GenusFilter(filters.FilterSet):

    class Meta:
        model = Genus
        fields = {
            'id': ['icontains'],
            'category_name': ['icontains'],
            'scientific_name': ['icontains'],
        }


class SpeciesFilter(filters.FilterSet):

    class Meta:
        model = Species
        fields = {
            'id': ['icontains'],
            'category_name': ['icontains'],
            'scientific_name': ['icontains'],
        }
