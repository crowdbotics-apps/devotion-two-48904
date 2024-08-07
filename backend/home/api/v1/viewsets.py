from datetime import datetime

from rest_framework import permissions, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, ViewSet

from home.api.v1.serializers import (SignupSerializer, UserDevotionSerializer,
                                     UserSerializer)
from home.models import Devotion, UserDevotion


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

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

class UserDevotionView(ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserDevotionSerializer

    def get(self, request):
        is_favourite = request.query_params.get('favourite', None)
        
        # Filter queryset based on the 'favourite' parameter
        if is_favourite is not None:
            # Convert to boolean if necessary, or handle different representations
            is_favourite = is_favourite.lower() in ['true', '1', 'yes']
            queryset = UserDevotion.objects.filter(user=self.request.user, is_favourite=is_favourite).select_related('devotion')
        else:
            queryset = UserDevotion.objects.filter(user=self.request.user).select_related('devotion')

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class UserDevotionCalendarView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        month = request.query_params.get('month') 
        if not month:
            return Response({"error": "Month is required"}, status=400)

        try:
            month_date = datetime.strptime(month, '%Y-%m')
        except ValueError:
            return Response({"error": "Invalid month format. Use YYYY-MM"}, status=400)

        user_devotions = UserDevotion.objects.filter(
            user=request.user,
            created_at__year=month_date.year,
            created_at__month=month_date.month
        ).select_related('devotion')
        serializer = UserDevotionSerializer(user_devotions, many=True)

        response_data = {}
        for user_devotion in serializer.data:
            # Get the date part only
            date = user_devotion['created_at'].split('T')[0] 
            devotions = user_devotion['devotions']
            if date not in response_data:
                response_data[date] = []
            response_data[date].extend(devotions)

        return Response(response_data)
