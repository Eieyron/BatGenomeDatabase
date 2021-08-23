from rest_framework import viewsets, permissions, status
from .serializer import StrainSerializer
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.parsers import FormParser, MultiPartParser
from .models import Strain
from Taxonomy.models import Domain, Phylum, Order, Class, Family, Genus, Species
from Taxonomy.serializer import DomainSerializer, PhylumSerializer, OrderSerializer, ClassSerializer, FamilySerializer, GenusSerializer, SpeciesSerializer

class StrainViewSet(viewsets.ModelViewSet):
    
    queryset = Strain.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = StrainSerializer

    parser_classes = [MultiPartParser, FormParser]

    filter_backends = [DjangoFilterBackend]

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

        print(data)

        return Response(data)