from django.db import models
from user.models import User

class Orders (models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    first_name = models.CharField(max_length=50 )
    last_name = models.CharField(max_length=50)
    phone = models.IntegerField(max_length=11)
    city = models.CharField(max_length=20)
    address = models.TextField()
    paper_q = models.IntegerField(max_length=3)
    plastic_q = models.IntegerField(max_length=3)
    metal_q = models.IntegerField(max_length=3)
    total_price = models.FloatField()
    longitude = models.FloatField()
    latitude = models.FloatField()

