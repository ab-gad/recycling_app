from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)

    description = models.TextField()
    image = models.ImageField()

    def str(self):
        return self.title
# test