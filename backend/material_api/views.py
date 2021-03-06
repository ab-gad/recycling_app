from django.shortcuts import render
from rest_framework import generics
from material_rate_and_price.models import Material_price , Material_rate
from .serializers import PriceSerializer , RateSerializer

class Material_rete_api(generics.ListCreateAPIView):
    queryset = Material_rate.objects.all()
    serializer_class = RateSerializer

class Material_price_api(generics.ListCreateAPIView):
    queryset = Material_price.objects.all()
    serializer_class = PriceSerializer
