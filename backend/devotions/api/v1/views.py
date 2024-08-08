from django.utils.translation import gettext_lazy as _
from rest_framework.generics import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import authentication, permissions

from .serializers import *


class DevotionsListCreateAPIView(ListCreateAPIView):
    queryset = Devotions.objects.all()
    serializer_class = DevotionsListSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


class DevotionsRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Devotions.objects.all()
    serializer_class = DevotionsListSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


class UserDevotionsListCreateAPIView(ListCreateAPIView):
    queryset = UserDevotions.objects.all()
    serializer_class = UserDevotionsListSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


class UserDevotionsRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = UserDevotions.objects.all()
    serializer_class = UserDevotionsListSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


class UserDevotionsFavoritesListAPIView(ListAPIView):
    queryset = UserDevotions.objects.filter(is_favorite=True)
    serializer_class = UserDevotionsListSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


class UserDevotionsFavoritesRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    queryset = UserDevotions.objects.filter(is_favorite=True)
    serializer_class = UserDevotionsListSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pk'