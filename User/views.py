from django.shortcuts import render

from .models import Account
from .serializers import AccountSerializer
from rest_framework import viewsets, permissions, status, serializers
from rest_framework.response import Response


from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework.parsers import JSONParser, FormParser, MultiPartParser, FileUploadParser

from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class LoginViewSet(TokenObtainPairView):

    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        user = Account.objects.get(username=request.data.get('username'))

        serializer.validated_data['user'] = AccountSerializer(user).data

        return Response(serializer.validated_data, status=status.HTTP_200_OK)

class AdminLoginViewSet(TokenObtainPairView):

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        user = Account.objects.get(username=request.data.get('username'))
        # print(user.id)

        # print(user.)

        if user.role not in [0,1]:
            raise serializers.ValidationError({"error":"user not admin"})

        serializer.validated_data['user'] = AccountSerializer(user).data

        return Response(serializer.validated_data, status=status.HTTP_200_OK)

SAFE_METHODS = ['POST']

class IsAuthenticatedOrCreateNew(permissions.BasePermission):
    """
    Allows access only to admin and users.
    Also allows if Creation of new user.
    """    

    def has_permission(self, request, view):


        if (request.method in SAFE_METHODS) and (request.user and request.user.role in [1,2]):
            return True
        return False

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    permission_classes = [
        IsAuthenticatedOrCreateNew
    ]

    serializer_class = AccountSerializer

    parser_classes = [MultiPartParser, FormParser]

    def update(self, request, *args, **kwargs):

        pk = kwargs.get('pk')

        instance = self.get_object()
        to_update = Account.objects.get(pk=pk)

        for key, val in request.data.items():
            if val in ['', ['']]:
                continue
            else:
            # print(key, val)
                to_update.__dict__[key] = val 

        serializer = AccountSerializer(to_update)

        to_update.save()

        return Response(serializer.data)
