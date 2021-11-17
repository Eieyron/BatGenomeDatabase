from rest_framework import serializers
from .models import Account
from datetime import datetime
import re

class AccountSerializer(serializers.ModelSerializer):

    password = serializers.CharField(style={'input_type':'password'},write_only=True)

    class Meta:
        model = Account
        fields = [
            'id',
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
            'mobile_number',
            'landline_number',
            'address',
            'image',
            'role',
        ]
        extra_kwargs = {
                'password':         {'write_only':True},
                'first_name':       {'required':False},
                'last_name':        {'required':False},
                'mobile_number':    {'required':False},
                'landline_number':  {'required':False},
                'image':            {'required':False},
                'address':          {'required':False},
                'role':             {'required':False},
        }

    def validate_mobile_number(self, value):

        if re.findall("[a-zA-Z]", value):
            raise serializers.ValidationError({'mobile_number':'must not contain letters.'}) 

        return value

    def validate_landline_number(self, value):

        if value != '':
            if re.findall("[a-zA-Z]", value):
                raise serializers.ValidationError({'landline_number':'must not contain letters.'}) 

        return value
    
    def create(self, validated_data):


        # CREATE ACCOUNT
        account = Account(
            email       = validated_data['email'],
            username    = validated_data['username'],
        )

        # SET DATA
        for key, value in validated_data.items():

            # SET OPTIONAL DATA
            if key == 'first_name':
                account.first_name = value
            elif key == 'last_name':
                account.last_name = value
            elif key == 'mobile_number':
                account.mobile_number = value
            elif key == 'landline_number':
                account.landline_number = value                    
            elif key == 'address':
                account.address = value
            elif key == 'image':
                account.image.save(name=value.name, content=value.file)  

            # SET PRIVILEGES
            if key == 'role' and value:
                account.role = value


        # SET PASSWORDS
        password = validated_data['password']
        account.set_password(password)
        account.save()

        # account['token']
        # print(account)

        return account

    def update(self, instance, validated_data):
        to_update = super().update(instance, validated_data)
        to_update.updated_at = datetime.now()

        try:
            if validated_data['password']:
                to_update.set_password(validated_data['password'])
        except:
            pass
        
        to_update.save()

        return to_update