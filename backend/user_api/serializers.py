from rest_framework import serializers
from user.models import User, userLocation

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = userLocation
        fields = '__all__'
        
