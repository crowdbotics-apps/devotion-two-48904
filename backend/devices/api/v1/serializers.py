import uuid

from rest_framework import serializers
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from fcm_django.api.rest_framework import FCMDeviceSerializer
from fcm_django.models import FCMDevice


class CreateFCMDeviceSerializer(FCMDeviceSerializer):
    def validate(self, attrs):
        attrs = super().validate(attrs)
        device_id = attrs.get('device_id', None)
        if device_id is None or device_id == '':
            attrs['device_id'] = uuid.uuid4()

        return attrs

    def create(self, validated_data):
        instance = FCMDevice.objects.create(**validated_data)
        from devices.tasks import task_add_user_device_to_firestore
        task_add_user_device_to_firestore.delay(instance.id)
        return instance
