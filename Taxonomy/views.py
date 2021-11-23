from .models import Domain, Phylum, Class, Order, Family, Genus, Species
from rest_framework import viewsets, permissions, status
from .serializer import DomainSerializer, PhylumSerializer, ClassSerializer, OrderSerializer, FamilySerializer, GenusSerializer, SpeciesSerializer
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser,JSONParser
from .filters import DomainFilter, PhylumFilter, ClassFilter, OrderFilter, FamilyFilter, GenusFilter, SpeciesFilter

class DomainViewSet(viewsets.ModelViewSet):
    
    queryset = Domain.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
        # permissions.AllowAny
    ]

    serializer_class = DomainSerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    filterset_class = DomainFilter

class PhylumViewSet(viewsets.ModelViewSet):
    
    queryset = Phylum.objects.all()
    permission_classes = [
        # permissions.IsAuthenticatedOrReadOnly
        permissions.AllowAny
    ]

    serializer_class = PhylumSerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    filterset_class = PhylumFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # print(serializer.data)
        toReturn = serializer.data

        for item in toReturn:
            item['parent'] = Domain.objects.get(pk=item['parent']).category_name

        return Response(toReturn)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        parent_serializer = DomainSerializer(instance.parent)

        data = serializer.data
        data['parent'] = parent_serializer.data

        return Response(data)

class ClassViewSet(viewsets.ModelViewSet):
    
    queryset = Class.objects.all()
    permission_classes = [
        # permissions.IsAuthenticatedOrReadOnly
        permissions.AllowAny
    ]

    serializer_class = ClassSerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    filterset_class = ClassFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # print(serializer.data)
        toReturn = serializer.data

        for item in toReturn:
            item['parent'] = Phylum.objects.get(pk=item['parent']).category_name

        return Response(toReturn)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        parent_serializer = PhylumSerializer(instance.parent)

        data = serializer.data
        data['parent'] = parent_serializer.data

        return Response(data)

class OrderViewSet(viewsets.ModelViewSet):
    
    queryset = Order.objects.all()
    permission_classes = [
        # permissions.IsAuthenticatedOrReadOnly
        permissions.AllowAny
    ]

    serializer_class = OrderSerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    filterset_class = OrderFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # print(serializer.data)
        toReturn = serializer.data

        for item in toReturn:
            item['parent'] = Class.objects.get(pk=item['parent']).category_name

        return Response(toReturn)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        parent_serializer = ClassSerializer(instance.parent)

        data = serializer.data
        data['parent'] = parent_serializer.data

        return Response(data)

class FamilyViewSet(viewsets.ModelViewSet):
    
    queryset = Family.objects.all()
    permission_classes = [
        # permissions.IsAuthenticatedOrReadOnly
        permissions.AllowAny
    ]

    serializer_class = FamilySerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    filterset_class = FamilyFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # print(serializer.data)
        toReturn = serializer.data

        for item in toReturn:
            item['parent'] = Order.objects.get(pk=item['parent']).category_name

        return Response(toReturn)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        parent_serializer = OrderSerializer(instance.parent)

        data = serializer.data
        data['parent'] = parent_serializer.data

        return Response(data)

class GenusViewSet(viewsets.ModelViewSet):
    
    queryset = Genus.objects.all()
    permission_classes = [
        # permissions.IsAuthenticatedOrReadOnly
        permissions.AllowAny
    ]

    serializer_class = GenusSerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    filterset_class = GenusFilter

    def create(self, request, *args, **kwargs):

        print("request_data_genus", request.data)

        return super().create(request, args, kwargs)


    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # print(serializer.data)
        toReturn = serializer.data

        for item in toReturn:
            item['parent'] = Family.objects.get(pk=item['parent']).category_name

        return Response(toReturn)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        parent_serializer = FamilySerializer(instance.parent)

        data = serializer.data
        data['parent'] = parent_serializer.data

        return Response(data)

class SpeciesViewSet(viewsets.ModelViewSet):
    
    queryset = Species.objects.all()
    permission_classes = [
        # permissions.IsAuthenticatedOrReadOnly
        permissions.AllowAny
    ]

    serializer_class = SpeciesSerializer

    parser_classes = [JSONParser, MultiPartParser, FormParser]

    filterset_class = SpeciesFilter

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        # print(serializer.data)
        toReturn = serializer.data

        for item in toReturn:
            item['parent'] = Genus.objects.get(pk=item['parent']).category_name

        return Response(toReturn)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        parent_serializer = GenusSerializer(instance.parent)

        data = serializer.data
        data['parent'] = parent_serializer.data

        return Response(data)
