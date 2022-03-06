from rest_framework import serializers
from material_rate_and_price.models import *


class RateSerializer(serializers.ModelSerializer):
   class Meta :
      model = Material_rate
      fields = '__all__'


class PriceSerializer(serializers.ModelSerializer):
   class Meta :
      model = Material_price
      fields = '__all__'