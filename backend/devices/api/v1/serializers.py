from rest_framework import serializers
from fcm_django.models import FCMDevice


class FCMDeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FCMDevice
        fields = '__all__'

    def create(self, validated_data):
        user = validated_data.get('user')
        registration_id = validated_data.get('registration_id')
        devices = FCMDevice.objects.filter(user=user, registration_id=registration_id)
        if devices.exists():
            return devices.first()
        return super(self.__class__, self).create(validated_data)


class FCMDeviceCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = FCMDevice
        fields = '__all__'
        extra_kwargs = {
            'user': {
                'read_only': True
            }
        }
