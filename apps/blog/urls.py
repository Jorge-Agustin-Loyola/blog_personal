
from django.urls import path, re_path, include
from .views import  BlogListViews


urlpatterns = [
    path("list", BlogListViews.as_view()  )

]