from events.models import Comments
from rest_framework import generics, viewsets
from .serializers import CommentsSerializer
# Create your views here.


class CommentsList(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
