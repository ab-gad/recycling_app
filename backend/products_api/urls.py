from django.urls import path, include
from .views import ProductsList
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Products', ProductsList)

urlpatterns = [
    path('', include(router.urls)),
]
