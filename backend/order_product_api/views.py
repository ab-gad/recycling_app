
from django.http import HttpResponse
from rest_framework import  viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import OrderProductSerializer
from order_product.models import OrderProducts 
# Create your views here.



class OrderProductList(viewsets.ModelViewSet):
    queryset = OrderProducts.objects.all()

    # select events_comments.user_id,comment,user_user.id ,user_user.avatar,user_user.first_name from user_user inner join events_comments on  events_comments.user_id=user_user.id;

    serializer_class = OrderProductSerializer

@api_view(['Get'])
def userOrderProduct(request, id):
    user_products_query=OrderProducts.objects.filter(user_id=id)
    user_products=OrderProductSerializer(user_products_query,many=True).data
    return Response({'products':user_products})

 
@api_view(['GET', 'PUT', 'DELETE'])
def OrderProduct(request , order_id):
    try:
        order = OrderProducts.objects.get(order_id=order_id)
    except OrderProduct.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = OrderProductSerializer(order)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = OrderProductSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        order.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


