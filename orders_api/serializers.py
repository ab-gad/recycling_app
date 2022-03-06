from rest_framework import serializers
from orders.models import Orders


class OrderSerializer(serializers.ModelSerializer):
   class Meta :
      model = Orders
      fields = '__all__'