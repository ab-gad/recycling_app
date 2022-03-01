from django.apps import AppConfig


class OrdersApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'orders_api'
class ProductsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'products'

