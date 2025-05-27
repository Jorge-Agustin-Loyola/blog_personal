
from django.urls import path, re_path, include
from .views import  BlogListViews, ListPostByCategory,PostDetailView,SearchBlogView

urlpatterns = [
    path("list", BlogListViews.as_view()  ),
    path("by_category", ListPostByCategory.as_view()  ),
    path("detail/<slug>", PostDetailView.as_view()  ),
    path("search", SearchBlogView.as_view()  ),

]