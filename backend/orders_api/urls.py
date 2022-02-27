from . import views
from django.urls import path 
from . import api


urlpatterns = [
    path('orders_api/', api.orderlist , name="orders_api"),
]
