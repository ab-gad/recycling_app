from rest_framework import generics
from user.models import User, userLocation
from events.models import Events
from .serializers import UserSerializer, LocationSerializer, EventsSerializer
from rest_framework.permissions import BasePermission, SAFE_METHODS
# Create your views here.

class EventWritePerm(BasePermission):
    message = 'Editing Events Restricted to Creator only'
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.useradmin == request.user

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 

class LocationList(generics.ListCreateAPIView):
    queryset = userLocation.objects.all()
    serializer_class =  LocationSerializer

class EventDetails(generics.RetrieveUpdateDestroyAPIView, EventWritePerm):
    permission_classes = [EventWritePerm]
    queryset = Events.objects.all()
    serializer_class =  EventsSerializer



""" Concrete View Classes
#CreateAPIView
Used for create-only endpoints.
#ListAPIView
Used for read-only endpoints to represent a collection of model instances.
#RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
#DestroyAPIView
Used for delete-only endpoints for a single model instance.
#UpdateAPIView
Used for update-only endpoints for a single model instance.
##ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
#RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
#RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""