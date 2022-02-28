
from backend.products.models import Product
from products.models import Product
from rest_framework import viewsets
from .serializers import ProductsSerializer
# Create your views here.


class EventsList(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
