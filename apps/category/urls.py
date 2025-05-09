
from django.urls import path, re_path, include
from .views import * 


urlpatterns = [
    path('list', ListCategoriesView.as_view())

]