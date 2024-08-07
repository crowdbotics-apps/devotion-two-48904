from django.contrib import admin

from .models import Devotion, UserDevices, UserDevotion, UserProfile

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(UserDevices)
admin.site.register(Devotion)
admin.site.register(UserDevotion)