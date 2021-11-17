from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import os

class AccountManager(BaseUserManager):

    def create_user(self, email, username, password=None):

        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have a username")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        # user.is_active = True
        user.role = 2

        user.set_password(password)
        user.save() 

        return user

    def create_admin(self, email, username, password=None):

        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have a username")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        # user.is_active = True
        user.role = 1

        user.set_password(password)
        user.save() 

        return user


def get_account_image_upload_path(instance, filename):
    return os.path.join(
        'account_image',
        instance.username,
        filename
    )

# Create your models here.
class Account(AbstractBaseUser):

    username        = models.CharField(max_length=50, unique=True)
    email           = models.EmailField(max_length=254, unique=True)
    first_name      = models.CharField(max_length=50)
    last_name       = models.CharField(max_length=50)
    mobile_number   = models.CharField(max_length=50, null=True)
    landline_number = models.CharField(max_length=50, null=True)
    address         = models.TextField(null=True)
    image           = models.ImageField(upload_to=get_account_image_upload_path, null=True)
    role            = models.IntegerField() # 1 - admin, 2 - user
    
    USERNAME_FIELD  = 'username'
    REQUIRED_FIELDS  = ['email']
    
