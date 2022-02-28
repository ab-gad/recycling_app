from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from orders.models import Orders


class OrderSerializer(serializers.ModelSerializer):
   class Meta :
      model = Orders
      fields = '__all__'