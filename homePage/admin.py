from django.contrib import admin

# Register your models here.

from .models import Skills, Projects, Experience, Education


admin.site.register(Skills)
admin.site.register(Projects)
admin.site.register(Experience)
admin.site.register(Education)