from events.models import Events
from rest_framework import generics, viewsets
from .serializers import EventsSerializer
# Create your views here.


class EventsList(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer
