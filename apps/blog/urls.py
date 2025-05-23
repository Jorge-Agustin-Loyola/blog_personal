
from django.urls import path, re_path, include
from .views import  BlogListViews, ListPostByCategory


urlpatterns = [
    path("list", BlogListViews.as_view()  ),
    path("by_category", ListPostByCategory.as_view()  ),

]