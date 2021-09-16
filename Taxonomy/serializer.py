from rest_framework import serializers
from .models import Domain, Phylum, Class, Order, Family, Genus, Species, Domain_Child, Phylum_Child, Class_Child, Order_Child, Family_Child, Genus_Child
from datetime import datetime

class DomainSerializer(serializers.ModelSerializer):

    class Meta:
        model = Domain
        fields = '__all__'

class PhylumSerializer(serializers.ModelSerializer):

    class Meta:
        model = Phylum
        fields = '__all__'

    def create(self, validated_data):

        to_return = super().create(validated_data)

        for key, val in validated_data.items():
            # print(key, val)
            if key == "parent":
                print(val.id)
                parent_id = val.id

        # print("domain",Domain.objects.get(id=parent_id) )

        parent_relationship = Domain_Child(
            domain_parent = Domain.objects.get(id=parent_id) ,
            phylum_child = to_return
        )

        parent_relationship.save()
        
        return to_return

    

class ClassSerializer(serializers.ModelSerializer):

    class Meta:
        model = Class
        fields = '__all__'

    def create(self, validated_data):

        to_return = super().create(validated_data)

        for key, val in validated_data.items():
            # print(key, val)
            if key == "parent":
                print(val.id)
                parent_id = val.id

        # print("domain",Domain.objects.get(id=parent_id) )

        parent_relationship = Phylum_Child(
            phylum_parent = Phylum.objects.get(id=parent_id) ,
            class_child = to_return
        )

        parent_relationship.save()
        
        return to_return

class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):

        to_return = super().create(validated_data)

        for key, val in validated_data.items():
            # print(key, val)
            if key == "parent":
                print(val.id)
                parent_id = val.id

        # print("domain",Domain.objects.get(id=parent_id) )

        parent_relationship = Class_Child(
            class_parent = Class.objects.get(id=parent_id) ,
            order_child = to_return
        )

        parent_relationship.save()
        
        return to_return

class FamilySerializer(serializers.ModelSerializer):

    class Meta:
        model = Family
        fields = '__all__'

    def create(self, validated_data):

        to_return = super().create(validated_data)

        for key, val in validated_data.items():
            # print(key, val)
            if key == "parent":
                print(val.id)
                parent_id = val.id

        # print("domain",Domain.objects.get(id=parent_id) )

        parent_relationship = Order_Child(
            order_parent = Order.objects.get(id=parent_id) ,
            family_child = to_return
        )

        parent_relationship.save()
        
        return to_return

class GenusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genus
        fields = '__all__'

    def create(self, validated_data):

        to_return = super().create(validated_data)

        for key, val in validated_data.items():
            # print(key, val)
            if key == "parent":
                print(val.id)
                parent_id = val.id

        parent_relationship = Family_Child(
            family_parent = Family.objects.get(id=parent_id) ,
            genus_child = to_return
        )

        parent_relationship.save()

        return to_return

class SpeciesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Species
        fields = '__all__'

    def create(self, validated_data):

        to_return = super().create(validated_data)

        for key, val in validated_data.items():
            # print(key, val)
            if key == "parent":
                print(val.id)
                parent_id = val.id

        # print("domain",Domain.objects.get(id=parent_id) )

        parent_relationship = Genus_Child(
            genus_parent = Genus.objects.get(id=parent_id) ,
            species_child = to_return
        )

        parent_relationship.save()
        
        return to_return
    
