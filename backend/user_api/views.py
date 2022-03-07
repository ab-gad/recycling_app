from cgitb import lookup
from rest_framework import generics
from orders.models import Orders
from user.models import User, userLocation
from events.models import Events
from .serializers import UserSerializer, LocationSerializer, EventsSerializer, AuthedUserSerializer
from rest_framework.permissions import BasePermission, SAFE_METHODS, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from orders_api.serializers import OrderSerializer
from rest_framework.parsers import MultiPartParser, FormParser
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

@api_view(['Get'])
@permission_classes([IsAuthenticated])
def getAuthedUser(request):
    if request.user :
        print("USER________________",request.user)
        authedUser=User.objects.get(id = request.user.id)
        print("AUTHED________________",authedUser)
        
        data=AuthedUserSerializer(authedUser, many=False).data
        return Response({'data':data})

    #class based views  
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    parser_classes = [MultiPartParser, FormParser]
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

@api_view(['Get'])
def events(request,id):
    user_events_query=Events.objects.filter(useradmin_id=id)
    user_events=EventsSerializer(user_events_query,many=True).data
    return Response({'events':user_events})

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