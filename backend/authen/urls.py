from django.urls import path
from .views import Register, BlacklistTokenUpdateView

app_name = 'authen'

urlpatterns = [
    path('register/', Register.as_view(), name='register'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist')
]
