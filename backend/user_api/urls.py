from django.urls import path
from .views import LocationList, EventDetails
from . import views

app_name = 'user_api'

urlpatterns = [
    # user api
    path('list/', views.userList, name='userlist'),
    path('list/<int:id>', views.UserDetail.as_view(), name='userDetails'),
    path('location/', LocationList.as_view(), name='locationlist'),
    path('event/<int:pk>/', EventDetails.as_view(), name='eventdetails'),
    path('orders/<int:id>',views.profile,name='user_orders'),
    path('events/<int:id>',views.events,name='user_events'),

    
]
