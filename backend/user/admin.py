from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin

# Register your models here.
from .models import User, userLocation
from events.models import Events
# Register your models here.
admin.site.register(User)
admin.site.register(Events)

@admin.register(userLocation)
class ShopAdmin(OSMGeoAdmin):
    list_display = ('user', 'city', 'location')
