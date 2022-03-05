from django.urls import path, include
from .views import OrderProductList
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'OrderProductList', OrderProductList)

urlpatterns = [
    path('', include(router.urls)),
]
