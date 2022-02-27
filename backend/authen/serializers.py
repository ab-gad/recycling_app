from rest_framework import serializers
from user.models import User

#djoser Settings
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

Djoser_user = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = Djoser_user
        fields = ('id','email','password', 'first_name', 'last_name')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','password', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance