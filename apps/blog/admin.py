from django.contrib import admin
from .models import Post,ViewCount

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category' )
    list_display_links = ('title', )
    list_per_page = 25
    search_fields = ('title',)
    prepopulated_fields = {"slug": ("title",)}

admin.site.register(Post, BlogPostAdmin)    
admin.site.register(ViewCount)    