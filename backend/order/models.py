from django.contrib.gis.db import models
from user.models import User

class Order (models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    city = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    price = models.FloatField(blank=True, null=True, verbose_name='price')
    paper = models.PositiveIntegerField()
    plastic = models.PositiveIntegerField()
    metal = models.PositiveIntegerField()
