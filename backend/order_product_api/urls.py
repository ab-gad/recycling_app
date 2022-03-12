from django.urls import path, include
from .views import OrderProductList
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'OrderProductList', OrderProductList)

urlpatterns = [
    path('', include(router.urls)),
    path('OrderProductList/<int:id>',views.userOrderProduct,name='user_products'),

]
