from rest_framework import serializers
from .models import Blog, Comment

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = '__all__'

# class BlogSerializer(serializers.ModelSerializer):
#   comments = CommentSerializer(many=True, read_only=True)
#   class Meta:
#     model = Blog
#     fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    class Meta:
        model = Blog
        fields = '__all__'

    def create(self, validated_data):
        comments_data = validated_data.pop('comments')  # extract comments
        blog = Blog.objects.create(**validated_data)    # create blog

        for comment in comments_data:
            Comment.objects.create(blog=blog, **comment)  # link each comment

        return blog