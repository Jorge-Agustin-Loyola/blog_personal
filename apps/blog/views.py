
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Post, ViewCount
from apps.category.models import Category
from .serializers import PostSerializer, PostListSerializer


class BlogListViews(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.objects.all().exists():
            post = Post.objects.all()
            serilizer = PostListSerializer(post, many=True)

            print("LIST POST")
            return Response({"post": serilizer.data}, status=status.HTTP_200_OK)
            
        else:
            return Response({'error':'No post found'}, status=status.HTTP_404_NOT_FOUND)