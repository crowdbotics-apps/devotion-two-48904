from django.urls import path, include
from rest_framework.routers import DefaultRouter
from fcm_django.api.rest_framework import FCMDeviceViewSet, FCMDeviceAuthorizedViewSet
from . import views

router = DefaultRouter()

router.register(r'', FCMDeviceViewSet, basename='all_devices')

app_name = 'devices'

urlpatterns = [
    path('', views.FCMDeviceListAPIView.as_view(), name='all'),
    path('create/', views.CreateFCMDeviceAPIView.as_view(), name='create'),
    path('detail/<int:pk>/', views.FCMDeviceDetailAPIView.as_view(), name='detail'),
]