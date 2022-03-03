from django.urls import path, include
from rest_framework import routers
from cart.views import ProductsViewSet, OrdersViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductsViewSet)
router.register(r'orders', OrdersViewSet)

urlpatterns = [
    path('', include(router.urls)),

]