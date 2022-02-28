from django.urls import path
from .views import LocationList, EventDetails, getAuthedUser
from . import views

app_name = 'user_api'

urlpatterns = [
    # user api
    path('list/', views.userList, name='userlist'),
    path('list/<int:id>', views.UserDetail.as_view(), name='userDetails'),
    path('location/', LocationList.as_view(), name='locationlist'),
    path('event/<int:pk>/', EventDetails.as_view(), name='eventdetails'),
    path('authedUser/', getAuthedUser, name='authedUser')
    
]
