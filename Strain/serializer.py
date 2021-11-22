from rest_framework import serializers
from .models import Strain
from Taxonomy.models import Species, Species_Child
from datetime import datetime
import base64

class StrainSerializer(serializers.ModelSerializer):

    species_only = serializers.BooleanField(write_only=True)

    class Meta:
        model = Strain
        fields = [
            'id',
            'strain_name',
            'type_strain',
            'scientific_name',
            'medium',
            'medium_growth',
            'medium_composition',
            'temperature',
            'temperature_type',
            'temperature_range',
            'reference_list',

            'species_only',

            'domain',
            'phylum',
            'class_name',
            'order',
            'family',
            'genus',
            'species',
        ]
        extra_kwargs = {
                'species_only':   {'required':True},
                'species':   {'required':True},
        }

    # def validate_type_strain(self, value):

    #     print("is this even getting validated")

    #     toReturn = base64.decodebytes(value)
    #     print(toReturn.__dict__)

    #     return value

    def create(self, validated_data):

        # to_return = super().create(validated_data)
        print("this is being invoked")

        strain = Strain(
            strain_name = validated_data['strain_name']
        )

        species_only = validated_data['species_only']

        for key, val in validated_data.items():

            if key == "type_strain" and val:
                strain.type_strain.save(name=val.name, content=val.file)

            elif key == "scientific_name":
                strain.scientific_name = val

            elif key == "medium":
                strain.medium = val

            elif key == "medium_growth":
                strain.medium_growth = val

            elif key == "medium_composition":
                strain.medium_composition = val

            elif key == "temperature":
                strain.temperature = val

            elif key == "temperature_range":
                strain.temperature_range = val

            elif key == "temperature_type":
                strain.temperature_type = val

            elif key == "reference_list":
                strain.reference_list = val


        if species_only:
            
            strain.species = validated_data['species']
            parent_id = strain.species.id

            strain.genus = strain.species.parent
            strain.family = strain.genus.parent
            strain.order = strain.family.parent
            strain.class_name = strain.order.parent
            strain.phylum = strain.class_name.parent
            strain.domain = strain.phylum.parent

        else:

            for key, val in validated_data.items():
            # print(key, val)

                if key == "species":
                    strain.species = val
                    parent_id = val.id

                elif key == "genus":
                    strain.genus = val

                elif key == "family":
                    strain.family = val
                
                elif key == "order":
                    strain.order = val
                
                elif key == "class_name":
                    strain.class_name = val
                
                elif key == "phylum":
                    strain.phylum = val
                
                elif key == "domain":
                    strain.domain = val
        
        strain.save()

        # print("domain",Domain.objects.get(id=parent_id) )

        parent_relationship = Species_Child(
            species_parent = Species.objects.get(id=parent_id) ,
            strain_child = strain
        )

        parent_relationship.save()

        return strain

    def update(self, instance, validated_data):

        for key, val in validated_data.items():

            if key == "type_strain" and val:
                instance.type_strain.save(name=val.name, content=val.file)

            elif key == "strain_name" and val:
                instance.strain_name = val

            elif key == "scientific_name" and val:
                instance.scientific_name = val

            elif key == "medium" and val:
                instance.medium = val

            elif key == "medium_growth" and val:
                instance.medium_growth = val

            elif key == "medium_composition" and val:
                instance.medium_composition = val

            elif key == "temperature" and val:
                instance.temperature = val

            elif key == "temperature_range" and val:
                instance.temperature_range = val

            elif key == "temperature_type" and val:
                instance.temperature_type = val

            elif key == "reference_list" and val:
                instance.reference_list = val

            elif key == "species" and val:
                instance.species = val

            elif key == "genus" and val:
                instance.genus = val

            elif key == "family" and val:
                instance.family = val
            
            elif key == "order" and val:
                instance.order = val
            
            elif key == "class_name" and val:
                instance.class_name = val
            
            elif key == "phylum" and val:
                instance.phylum = val
            
            elif key == "domain" and val:
                instance.domain = val
        
        instance.save()

        return instance