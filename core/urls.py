"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import imp
from re import template
from django.contrib import admin
from django.urls import path, include,re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
# for auth tokens
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    # to use restFramwork in authentication
    path('api-auth/', include('rest_framework.urls')),
    path('user_api/', include('user_api.urls', namespace='user_api')),
    path('events_api/', include('events_api.urls')),
    path('products_api/', include('products_api.urls')),
    path('order_product_api/', include('order_product_api.urls')),
    path('comment_api_test/', include('comment_api_test.urls')),
    path('api/stripe/', include('payments.urls')),
    path('authen/', include('authen.urls', namespace='authen')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('chat/', include('chat.urls')),
    # for auth tokens
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    # orders API
    path('orders_api/', include('orders_api.urls')),
    re_path('.*',TemplateView.as_view(template_name='index.html'))
    
]

urlpatterns = urlpatterns + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)