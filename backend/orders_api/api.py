from orders.models import Orders
from .serializers import OrderSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view ([ 'GET' ])
def orderlist (requsest):
    all_orders = Orders.objects.all()
    data = OrderSerializer(all_orders , many=True ).data
    return Response( {'data' : data} )

