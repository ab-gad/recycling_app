from events.models import Events
from rest_framework import generics, viewsets
from .serializers import EventsSerializer
# Create your views here.


class EventsList(viewsets.ModelViewSet):
    queryset = Events.objects.all()

    # select events_comments.user_id,comment,user_user.id ,user_user.avatar,user_user.first_name from user_user inner join events_comments on  events_comments.user_id=user_user.id;

    serializer_class = EventsSerializer
