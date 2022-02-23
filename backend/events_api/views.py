from events.models import Events
from rest_framework import generics
from .serializers import EventsSerializer
# Create your views here.


class EventsList(generics.ListCreateAPIView):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer
