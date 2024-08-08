from rest_framework.generics import *
from django.db import models
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from users.models import UserProfile
from .serializers import UserProfileSerializer


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    try:
        profile = request.user.profile
        serializer = UserProfileSerializer(
            profile, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Profile updated successfully'})
        return Response(serializer.errors, status=400)
    except UserProfile.DoesNotExist:
        return Response({'error': 'Profile does not exist'}, status=404)
    except Exception as e:
        return Response({'error': str(e)}, status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    try:
        profile = request.user.profile
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)
    except UserProfile.DoesNotExist:
        return Response({'error': 'Profile does not exist'}, status=404)
    except Exception as e:
        return Response({'error': str(e)}, status=400)
