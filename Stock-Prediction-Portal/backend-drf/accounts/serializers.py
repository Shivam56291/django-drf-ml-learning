from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def validate_email(self, value):
      if User.objects.filter(email=value).exists():
        raise serializers.ValidationError({
            "error": "email_exists",
            "message": "An account with this email already exists."
        })
      return value


    def validate_username(self, value):
      if User.objects.filter(username=value).exists():
        raise serializers.ValidationError({
            "error": "username_taken",
            "message": "This username is already taken."
        })
      return value

    def create(self, validated_data):
      # User.objects.create = save the password in plain text
      # User.objects.create_user = save the password in hashed format
      user = User.objects.create_user(**validated_data) # modern way
        # user = User.objects.create_user(
        #     username=validated_data["username"],
        #     email=validated_data["email"],
        #     password=validated_data["password"],
        # ) # old way
      return user