from datetime import datetime

from rest_framework import permissions, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, ViewSet

from home.api.v1.serializers import (SignupSerializer, UserSerializer)

class SignupViewSet(ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""
    permission_classes = [permissions.AllowAny]

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

