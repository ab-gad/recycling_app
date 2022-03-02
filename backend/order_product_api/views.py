
from rest_framework.response import Response

from rest_framework.decorators import api_view
from .serializers import OrderProductSerializer, OrderItemSerializer
from order_product.models import OrderProduct, OrderItem
# Create your views here.


@api_view(['GET', 'POST'])
def showMultipleModels(request):
    orderProductObj = OrderProduct.objects.all()
    orderItemObj = OrderItem.objects.all()
    orderProductSerializerObj = OrderProductSerializer(
        orderProductObj, many=True)
    orderItemSerializerObj = OrderItemSerializer(orderItemObj, many=True)
    resultModel = orderProductSerializerObj.data+orderItemSerializerObj.data
    return Response(resultModel)
