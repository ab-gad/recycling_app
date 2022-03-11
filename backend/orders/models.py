from django.db import models
from user.models import User
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point
from django.core.validators import RegexValidator
PHONE_REGEX = RegexValidator(
    r'^01[0125][0-9]{8}$', 'Egyptian phone number is required')


class Orders (models.Model):
    HOME = 'H'
    WORKER = 'W'
    SHOP = 'S'
    TYPE_CHOICES = (
        (HOME, "home"),
        (WORKER, "worker"),
        (SHOP, "shop"),
    )
    
    PENDENG = 'P'
    APPROVED = 'A'
    SHIPPING = 'S'
    DELIVERED = 'D'
    STATUS_CHOICES = (
        (PENDENG, "pending"),
        (APPROVED, "approved"),
        (SHIPPING, "shipping"),
        (DELIVERED, "delivered"),
    )
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default=PENDENG)
    type = models.CharField(max_length=1, choices=TYPE_CHOICES, default=HOME)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, validators=[
        PHONE_REGEX], blank=True, null=True, verbose_name='phone')
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


