from events.models import Comments
from rest_framework import generics, viewsets
from .serializers import CommentsSerializer

# Create your views here.


class CommentsList(viewsets.ModelViewSet):
    queryset=Comments.objects.raw('select  events_comments.user_id, events_comments.comment  ,user_user.id , user_user.avatar , user_user.first_name from   user_user  inner join  events_comments  on  events_comments.user_id=user_user.id;')

    serializer_class = CommentsSerializer
