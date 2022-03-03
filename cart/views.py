from rest_framework import viewsets, permissions
from cart.models import Products, Order
from cart.serializers import ProductsSerializer, OrdersSerializer
from cart.permissions import IsOwnerOrReadOnly



# Create your views here.
class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all().order_by('-name')
    serializer_class = ProductsSerializer
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    )

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    )

    def get_queryset(self):
        user = self.request.user
        print(user)
        queryset = self.queryset.filter(owner=user.id)
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

