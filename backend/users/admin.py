from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from users.forms import UserChangeForm, UserCreationForm
from django.utils.translation import gettext_lazy as _

from .models import *

@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.title = 'List of Users'
        self.list_title = 'List of Users'
        self.opts.verbose_name_plural = _('List of Users')
    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("name",)}),) + auth_admin.UserAdmin.fieldsets
    list_display = ["username", "name", "is_superuser"]
    search_fields = ["name"]

@admin.register(UserProfile)
class UserProfile(admin.ModelAdmin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.title = 'List of User Profiles'
        self.list_title = 'List of User Profiles'
        self.opts.verbose_name_plural = _('List of User Profiles')
    list_display = ['user', 'pronoun', 'devotion']
    search_fields = ['user', 'pronoun', 'devotion']
