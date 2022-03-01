from events.models import Comments
from user.models import User
from .serializers import CommentsSerializer, UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.


@api_view(['GET', 'POST'])
def showMultipleModels2(request):
    commentObj = Comments.objects.all()
    userObj = User.objects.all()
    # print(commentObj)
    for comments in Comments.objects.all():

       print(comments.user)


    # for comments in User.objects.aggregate:
    #     print(comments.first_name   ) 
     
    # print(userObj)
    userSerializerObj = UserSerializer(userObj, many=True)
    commentSerializerObj = CommentsSerializer(commentObj, many=True)
    resultModel = userSerializerObj.data+commentSerializerObj.data
    return Response(resultModel)
