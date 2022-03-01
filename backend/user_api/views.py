from cgitb import lookup
from urllib import response
from rest_framework import generics
from orders.models import Orders
from user.models import User, userLocation
from events.models import Events
from .serializers import UserSerializer, LocationSerializer, EventsSerializer
from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.decorators import api_view
from rest_framework.response import Response
from orders_api.serializers import OrderSerializer

# Create your views here.

class EventWritePerm(BasePermission):
    message = 'Editing Events Restricted to Creator only'
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.useradmin == request.user 
    #fn based views 
@api_view(['Get'])
def userList(request):
    all_users=User.objects.all()
    data=UserSerializer(all_users,many=True).data
    return Response({'data':data})

    #class based views  
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    lookup_field='id'


class LocationList(generics.ListCreateAPIView):
    queryset = userLocation.objects.all()
    serializer_class =  LocationSerializer

class EventDetails(generics.RetrieveUpdateDestroyAPIView, EventWritePerm):
    permission_classes = [EventWritePerm]
    queryset = Events.objects.all()
    serializer_class =  EventsSerializer

@api_view(['Get'])
def profile(request,id):
    user_orders_query=Orders.objects.filter(user_id_id=id)
    user_orders=OrderSerializer(user_orders_query,many=True).data
    return Response({'orders':user_orders})


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