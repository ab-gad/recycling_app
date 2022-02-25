from rest_framework import serializers
from events.models import Comments


class CommentsSerializer(serializers.ModelSerializer):
    avatar = serializers.ReadOnlyField()
    first_name = serializers.ReadOnlyField()

    class Meta:
        model = Comments
        fields = '__all__'
