from django.urls import path, include
from .views import EventsList, handleVolunteer, getUserEvents, getUserInterests, handleInterests
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Events', EventsList)

urlpatterns = [
    path('', include(router.urls)),
    path('handleVoluntee/<int:userId>/<int:eventId>',handleVolunteer,name='handleVoluntee'),
    path('handleInterests/<int:userId>/<int:eventId>',handleInterests,name='handleInterests'),
    path('getUserEvents/<int:userId>',getUserEvents,name='getUserEvents'),
    path('getUserInterests/<int:userId>',getUserInterests,name='getUserInterests'),
]
