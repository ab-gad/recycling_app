from orders.models import Orders
from .serializers import OrderSerializer
from rest_framework import generics

class Order_list(generics.ListAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer

class Order_details(generics.RetrieveUpdateDestroyAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'id'

