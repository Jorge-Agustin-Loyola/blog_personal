
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Category

class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Category.objects.all().exists():
            catergories = Category.objects.all()
            result = []
            
            for category in catergories:
                if not category.parent:
                    item={}
                    item["id"] = category.id
                    item["name"] = category.name
                    item["slug"] = category.slug
                    item["views"] = category.views
                    item["sub_categories"]=[]
                    
                    for sub_category in catergories:
                        if sub_category.parent and sub_category.parent.id == category.id:
                            item_subcategory={}
                            item_subcategory["id"] = sub_category.id
                            item_subcategory["name"] = sub_category.name
                            item_subcategory["slug"] = sub_category.slug
                            item_subcategory["views"] = sub_category.views
                            item["sub_categories"].append(item_subcategory)        

                    result.append(item)

            print("LIST CATEGORIES")
            return Response({"Categories":result}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No categories found'}, status=status.HTTP_404_NOT_FOUND)