from django.urls import path
from .views import EventsList

app_name = 'events_api'

urlpatterns = [
    path('', EventsList.as_view(), name='eventlist'),
]
