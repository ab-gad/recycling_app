from rest_framework import generics
from user.models import User, userLocation
from .serializers import UserSerializer, LocationSerializer
# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 

class LocationList(generics.ListCreateAPIView):
    queryset = userLocation.objects.all()
    serializer_class =  LocationSerializer

