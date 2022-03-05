from django.contrib import admin
from .models import Orders
from django.contrib.gis.admin import OSMGeoAdmin

@admin.register(Orders)
class ShopAdmin(OSMGeoAdmin):
    list_display = ('id', 'city', 'order_date','status','type')
