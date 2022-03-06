from django import http
from django.urls import path 
from . import api


urlpatterns = [
    path('', api.Order_list.as_view() , name="orders_api"),
    path('<int:id>/', api.Order_details.as_view() , name="order_details"),
]



