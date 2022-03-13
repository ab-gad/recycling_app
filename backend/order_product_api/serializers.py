from rest_framework import serializers
from order_product.models import OrderProducts


class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProducts
        fields = '__all__'

