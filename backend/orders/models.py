from django.db import models
from user.models import User

class Orders (models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    first_name = models.CharField(max_length=50 )
    last_name = models.CharField(max_length=50)
    city = models.CharField(max_length=20)
    phone = models.IntegerField()
    address = models.TextField()
    paper_q = models.IntegerField()
    plastic_q = models.IntegerField()
    metal_q = models.IntegerField()
    total_price = models.FloatField()
    longitude = models.FloatField()
    latitude = models.FloatField()

    def __str__(self) :
        return str( self.first_name )