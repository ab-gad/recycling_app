from django.urls import path
from .views import UserList,LocationList, EventDetails

app_name = 'user_api'

urlpatterns = [
    path('', UserList.as_view(), name='userlist'),
    path('location/', LocationList.as_view(), name='locationlist'),
    path('event/<int:pk>/', EventDetails.as_view(), name='eventdetails'),
    
]
