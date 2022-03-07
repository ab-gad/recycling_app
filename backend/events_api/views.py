from events.models import Events
from rest_framework import generics, viewsets
from .serializers import EventsSerializer, UserSerializer
# Create your views here.
from rest_framework.decorators import api_view
from user.models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, redirect, render

class EventsList(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer

    # select events_comments.user_id,comment,user_user.id ,user_user.avatar,user_user.first_name from user_user inner join events_comments on  events_comments.user_id=user_user.id;

@api_view(['Get'])
def handleVolunteer(request, userId, eventId):
    try:
        event = get_object_or_404(Events, pk=eventId)
        user = get_object_or_404(User, pk=userId)
        print('_________________EVENT', event, eventId)
        print('_________________USER', user, userId)

        oldEvent = EventsSerializer(event, many=False).data
        
        oldVoluntees = oldEvent['volunteers']
        print('_________________OLD VOLUNTEERS',oldVoluntees)

        if userId in oldVoluntees :
            event.volunteers.remove(user)
        else:
            event.volunteers.add(user)

        data=EventsSerializer(event, many=False).data
        return Response({'data':data})
    except:
        return Response({'data':"Error in Modifying Your Events"})

@api_view(['Get'])
def handleInterests(request, userId, eventId):
    try:
        event = get_object_or_404(Events, pk=eventId)
        user = get_object_or_404(User, pk=userId)
        print('_________________EVENT', event, eventId)
        print('_________________USER', user, userId)

        oldEvent = EventsSerializer(event, many=False).data
        
        oldInterests = oldEvent['interests']
        print('_________________OLD VOLUNTEERS',oldInterests)

        if userId in oldInterests :
            event.interests.remove(user)
        else:
            event.interests.add(user)

        data=EventsSerializer(event, many=False).data
        return Response({'data':data})
    except:
        return Response({'data':"Error in Modifying Your Enterests"})

@api_view(['Get'])
def getUserEvents(request, userId):
    try:
        user = get_object_or_404(User, pk=userId)
        print('_________________USER', user, userId)
        querySet = user.myevents.all()
        print('_________________USER EVENTS',querySet)
        eventsData= EventsSerializer(querySet, many=True).data
        print('_________________USER EVENTS',eventsData)
        return Response({'data':eventsData})
    except:
        return Response({'data':"Sorry we can't get your event right now, please try again later"})


@api_view(['Get'])
def getUserInterests(request, userId):
    try:
        user = get_object_or_404(User, pk=userId)
        print('_________________USER', user, userId)
        querySet = user.myinterests.all()

        eventsData= EventsSerializer(querySet, many=True).data
        print('_________________USER EVENTS',eventsData)
        return Response({'data':eventsData})
    except:
        return Response({'data':"Sorry we can't get your event right now, please try again later"})