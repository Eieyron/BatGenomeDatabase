from rest_framework import routers
from django.urls import path, include
from .views import StrainViewSet

router = routers.DefaultRouter()

router.register('', StrainViewSet)

urlpatterns = router.urls
