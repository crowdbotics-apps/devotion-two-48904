from django.utils.translation import gettext_lazy as _
from rest_framework import serializers

from devotions.models import *


class DevotionsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Devotions
        fields = '__all__'

class UserDevotionsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDevotions
        fields = '__all__'