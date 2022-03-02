from events.models import Comments
from user.models import User
from .serializers import CommentsSerializer

from rest_framework import viewsets
# Create your views here.

class CommentsList(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer


    # select events_comments.user_id,comment,user_user.id ,user_user.avatar,user_user.first_name from user_user inner join events_comments on  events_comments.user_id=user_user.id;



    # commentObj = Comments.objects.all()
    # userObj = User.objects.all()
    # print(commentObj)
    # for comments in Comments.objects.all():

    #    print(comments.user)


    # for comments in User.objects.aggregate:
    #     print(comments.first_name   ) 
     
    # print(userObj)
    # userSerializerObj = UserSerializer(userObj, many=True)
    # commentSerializerObj = CommentsSerializer(commentObj, many=True)
    # resultModel = userSerializerObj.data+commentSerializerObj.data
