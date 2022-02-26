from django.urls import path, include
from .views import CommentsList
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Comments', CommentsList)

urlpatterns = [
    path('', include(router.urls)),
]
