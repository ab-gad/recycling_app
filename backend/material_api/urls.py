from django.urls import path
from .views import Material_rete_api , Material_price_api


urlpatterns = [
    path('rate/' , Material_rete_api.as_view() , name="material_rete"),
    path('price/' , Material_price_api.as_view() , name="material_price"),
]

# http://localhost:8000/material_api/price/
# http://localhost:8000/material_api/rate/