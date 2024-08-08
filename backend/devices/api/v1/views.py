
from rest_framework.response import Response
from rest_framework.generics import *
from fcm_django.api.rest_framework import FCMDeviceSerializer
from fcm_django.models import FCMDevice
from .serializers import CreateFCMDeviceSerializer


class CreateFCMDeviceAPIView(CreateAPIView):
    serializer_class = CreateFCMDeviceSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        request_data = request.data
        registration_id = request_data.get('registration_id')
        user = request.user
        devices = FCMDevice.objects.filter(registration_id=registration_id)
        if devices.exists():
            device = devices.first()
            device.user = user
            device.save()
            serializer = self.get_serializer(device)
            return Response(serializer.data)
        return super().create(request, *args, **kwargs)


class FCMDeviceListAPIView(ListAPIView):
    serializer_class = FCMDeviceSerializer
    queryset = FCMDevice.objects.none()

    def get_queryset(self):
        return FCMDevice.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True, context=self.get_serializer_context())
        return Response(serializer.data)


class FCMDeviceDetailAPIView(RetrieveDestroyAPIView):
    serializer_class = FCMDeviceSerializer
    queryset = FCMDevice.objects.none()

    def get_queryset(self):
        return FCMDevice.objects.filter(user=self.request.user)
