
from products.models import Product
from rest_framework import viewsets
from .serializers import ProductsSerializer
# Create your views here.


class ProductsList(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
