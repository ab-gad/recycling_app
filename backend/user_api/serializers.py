from rest_framework import serializers
from user.models import User, userLocation
from events.models import Events

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = userLocation
        fields = '__all__'

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'
