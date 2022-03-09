from events.models import Events, Comments
from rest_framework import generics, viewsets
from .serializers import EventsSerializer, UserSerializer, CommentsSerializer
# Create your views here.
from rest_framework.decorators import api_view
from user.models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, redirect, render

class EventsList(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer

class Comments(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

@api_view(['Get'])
def getEventComments(request, eventId):
    try:
        event = get_object_or_404(Events, pk=eventId)
        querySet = event.comments.all()
        commentsData= CommentsSerializer(querySet, many=True).data
        return Response({'comments':commentsData})
    except:
        return Response({'data':"Sorry we can't get event's comments right now, please try again later"})

@api_view(['Get'])
def handleVolunteer(request, userId, eventId):
    try:
        event = get_object_or_404(Events, pk=eventId)
        user = get_object_or_404(User, pk=userId)

        oldEvent = EventsSerializer(event, many=False).data
        oldVoluntees = oldEvent['volunteers']

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

        oldEvent = EventsSerializer(event, many=False).data
        oldInterests = oldEvent['interests']

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
        querySet = user.myevents.all()
        eventsData= EventsSerializer(querySet, many=True).data
        return Response({'data':eventsData})
    except:
        return Response({'data':"Sorry we can't get your event right now, please try again later"})


@api_view(['Get'])
def getUserInterests(request, userId):
    try:
        user = get_object_or_404(User, pk=userId)
        querySet = user.myinterests.all()
        eventsData= EventsSerializer(querySet, many=True).data
        return Response({'data':eventsData})
    except:
        return Response({'data':"Sorry we can't get your event right now, please try again later"})