from django import http
from . import views
from django.urls import path 
from . import api


urlpatterns = [
    path('orders_api/', api.Order_list.as_view() , name="orders_api"),
    path('orders_api/<int:id>', api.Order_details.as_view() , name="order_details"),
]



