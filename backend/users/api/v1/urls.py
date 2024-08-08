from django.urls import path

from . import views

app_name = 'users'

urlpatterns = [
    path('update-profile/', views.update_profile, name='update_profile'),
    path('get-profile/', views.get_profile, name='get_profile'),
]
