from rest_framework import viewsets, permissions, status
from .serializer import StrainSerializer
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser
from .models import Strain
from Taxonomy.models import Domain, Phylum, Order, Class, Family, Genus, Species
from Taxonomy.serializer import DomainSerializer, PhylumSerializer, OrderSerializer, ClassSerializer, FamilySerializer, GenusSerializer, SpeciesSerializer
import json, base64
from django_filters import rest_framework as filters

class Prototype:

    pass

class StrainFilter(filters.FilterSet):

    class Meta:
        model = Strain
        fields = {
            'id': ['icontains'],
            'strain_name': ['icontains'],
            'scientific_name': ['icontains'],
        }

class StrainViewSet(viewsets.ModelViewSet):
    
    queryset = Strain.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = StrainSerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    # filter_backends = [DjangoFilterBackend]
    filterset_class = StrainFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # print("test_")
        # print(serializer.data)
        to_return = serializer.data

        for item in to_return:
            item['domain'] = Domain.objects.get(pk=item['domain']).category_name
            item['phylum'] = Phylum.objects.get(pk=item['phylum']).category_name
            item['order'] = Order.objects.get(pk=item['order']).category_name
            item['class_name'] = Class.objects.get(pk=item['class_name']).category_name
            item['family'] = Family.objects.get(pk=item['family']).category_name
            item['genus'] = Genus.objects.get(pk=item['genus']).category_name
            item['species'] = Species.objects.get(pk=item['species']).category_name


        return Response(to_return)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        data = serializer.data

        # print(data)
        data['domain'] = (DomainSerializer(instance.domain)).data
        data['phylum'] = (PhylumSerializer(instance.phylum)).data
        data['class_name'] = (ClassSerializer(instance.class_name)).data
        data['order'] = (OrderSerializer(instance.order)).data
        data['family'] = (FamilySerializer(instance.family)).data
        data['genus'] = (GenusSerializer(instance.genus)).data
        data['species'] = (SpeciesSerializer(instance.species)).data

        # print(data)

        return Response(data)


