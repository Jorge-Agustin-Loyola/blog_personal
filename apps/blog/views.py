
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Post, ViewCount
from apps.category.models import Category
from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination,LargeSetPagination,MediumSetPagination


class BlogListViews(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.objects.all().exists():
            post = Post.objects.all()

            paginator = SmallSetPagination()
            result = paginator.paginate_queryset(post, request)
            serilizer = PostListSerializer(result, many=True)
            

            print("LIST POST")
            return paginator.get_paginated_response({"post": serilizer.data})
            
        else:
            return Response({'error':'No post found'}, status=status.HTTP_404_NOT_FOUND)
        
class ListPostByCategory(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        if Post.objects.all().exists():
            post = Post.objects.all().order_by('-published')
            print("ListPostByCategory")
            return Response({'success': 'test ListPostByCategory'}, status=status.HTTP_200_OK )
        else:
            return Response({'error':'No post found'}, status=status.HTTP_404_NOT_FOUND)
            
        