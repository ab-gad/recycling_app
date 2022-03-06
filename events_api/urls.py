from django.urls import path, include
from .views import EventsList
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Events', EventsList)

urlpatterns = [
    path('', include(router.urls)),
]
