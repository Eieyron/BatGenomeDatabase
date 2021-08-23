from rest_framework import routers
from django.urls import path, include
from .views import DomainViewSet, PhylumViewSet, ClassViewSet, OrderViewSet, FamilyViewSet, GenusViewSet, SpeciesViewSet

router = routers.DefaultRouter()

router.register('domain', DomainViewSet)
router.register('phylum', PhylumViewSet)
router.register('class', ClassViewSet)
router.register('order', OrderViewSet)
router.register('family', FamilyViewSet)
router.register('genus', GenusViewSet)
router.register('species', SpeciesViewSet)

urlpatterns = router.urls
