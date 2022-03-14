from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from decimal import Decimal



class OrderProducts(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    products = ArrayField(models.CharField(max_length=50), default=[])
    quantities = ArrayField(models.PositiveIntegerField(), default=[])
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'))
    address = models.TextField(blank=True,null=True ,default=None)

    order_date = models.DateTimeField(auto_now_add=True)
    being_delivered = models.BooleanField(default=True)
    received = models.BooleanField(default=False)

    class Meta:
        db_table = 'orderproduct'
        verbose_name = ("Products order")
        verbose_name_plural = ("Products order ")
        ordering=('-order_date',)

    def __str__(self):
        return str(self.id)
