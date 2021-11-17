from rest_framework import routers
from django.urls import path
from .views import AccountViewSet, LoginViewSet, AdminLoginViewSet
# from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import TokenRefreshView

router = routers.DefaultRouter()

urlpatterns = [
    path('login', LoginViewSet.as_view()),
    path('login/', LoginViewSet.as_view()),
    path('adminlogin', AdminLoginViewSet.as_view()),
    path('adminlogin/', AdminLoginViewSet.as_view()),
    path('login/refresh/', TokenRefreshView.as_view()),
]
router.register('', AccountViewSet)



urlpatterns += router.urls
