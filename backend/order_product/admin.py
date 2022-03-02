from django.contrib import admin
from .models import OrderItem
from .models import OrderProduct

# Register your models here.
admin.site.register(OrderProduct)
admin.site.register(OrderItem)
