from django.urls import path, include
from .views import EventsList, Comments, handleVolunteer, getUserEvents, getUserInterests, handleInterests, getEventComments
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Events', EventsList)
router.register(r'comments', Comments)
urlpatterns = [
    path('', include(router.urls)),
    path('handleVoluntee/<int:userId>/<int:eventId>',handleVolunteer,name='handleVoluntee'),
    path('handleInterests/<int:userId>/<int:eventId>',handleInterests,name='handleInterests'),
    path('getUserEvents/<int:userId>',getUserEvents,name='getUserEvents'),
    path('getUserInterests/<int:userId>',getUserInterests,name='getUserInterests'),
    path('getEventComments/<int:eventId>',getEventComments,name='getEventComments'),
]
