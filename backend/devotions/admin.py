from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import *


@admin.register(Devotions)
class DevotionsAdmin(admin.ModelAdmin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.title = 'List of All Devotions'
        self.list_title = 'List of All Devotions'
        self.opts.verbose_name_plural = _('List of All Devotions')

    list_display = ['devotion', 'pronoun', 'created_at', 'updated_at']
    search_fields = ['devotion', 'pronoun']
    list_filter = ['created_at', 'updated_at']


@admin.register(UserDevotions)
class UserDevotionsAdmin(admin.ModelAdmin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.title = 'List of User Devotions'
        self.list_title = 'List of User Devotions'
        self.opts.verbose_name_plural = _('List of User Devotions')
    list_display = ['user', 'devotion', 'is_favorite',
                    'schedule_at', 'created_at', 'updated_at']
    search_fields = ['user', 'devotion']
    list_filter = ['created_at', 'updated_at']
