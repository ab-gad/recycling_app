from django.contrib.gis.db import models
from user.models import User
from django.contrib.gis.geos import Point

class Orders (models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    first_name = models.CharField(max_length=50 )
    last_name = models.CharField(max_length=50)
    phone = models.IntegerField()
    paper_q = models.IntegerField()
    plastic_q = models.IntegerField()
    metal_q = models.IntegerField()
    total_price = models.FloatField()
    city = models.CharField(max_length=50)
    address = models.TextField()
    latitude = models.FloatField(blank=True, null=True, verbose_name='Latitude')
    longitude = models.FloatField(blank=True, null=True, verbose_name='Longitude')
    location = models.PointField(blank=True, null=True)
    order_date = models.DateTimeField(auto_now_add=True)


    def save(self, *args, **kwargs):
        self.location = Point(self.longitude, self.latitude)
        super(Orders, self).save(*args, **kwargs)  # Call the "real" save() method.
   

    def __str__(self) :
        return str( self.id )


