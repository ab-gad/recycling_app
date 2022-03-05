from django.db import models

class Material_rate (models.Model):
    material = models.CharField(max_length=30)
    annual_production = models.FloatField(default=0)
    annual_consumption = models.FloatField(default=0)
    annual_recycling = models.FloatField(default=0)
    
    def __str__(self):
        return str(self.material) 
   

class Material_price (models.Model):
    material = models.CharField(max_length=30)
    home_price= models.FloatField(default=0)
    shop_price = models.FloatField(default=0)
    workers_price= models.FloatField(default=0)
   
    def __str__(self):
        return str(self.material) 