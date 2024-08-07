from allauth.account import app_settings as allauth_settings
from allauth.account.adapter import get_adapter
from allauth.account.forms import ResetPasswordForm
from allauth.account.utils import setup_user_email
from allauth.utils import email_address_exists, generate_unique_username
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import PasswordResetSerializer
from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers

from home.models import PRONOUN_CHOICES, UserDevotion, UserProfile

User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"
        read_only_fields = ("user",)
        extra_kwargs = {
            "pronoun": {
                "required": True,
            },
            "devotion": {
                "required": False,
            },
            "user": {
                "required": False,
            },
        }

class SignupSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ("id", "name", "email", "password", "profile")
        extra_kwargs = {
            "password": {"write_only": True, "style": {"input_type": "password"}},
            "email": {
                "required": True,
                "allow_blank": False,
            },
        }

    def _get_request(self):
        request = self.context.get("request")
        if (
            request
            and not isinstance(request, HttpRequest)
            and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address.")
                )
        return email

    def create(self, validated_data):
        profile_data = validated_data.pop('profile', {})
        
        # Create User instance
        user = User(
            email=validated_data.get("email"),
            name=validated_data.get("name"),
            username=generate_unique_username(
                [validated_data.get("name"), validated_data.get("email"), "user"]
            ),
        )
        user.set_password(validated_data.get("password"))
        user.save()
    
        # Create UserProfile instance if provided
        if profile_data:
            UserProfile.objects.create(user=user, **profile_data)
        
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "name"]


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""

    password_reset_form_class = ResetPasswordForm

# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = '__all__'

class UserDevotionSerializer(serializers.ModelSerializer):
    user_profile = UserProfileSerializer(source='user.user', read_only=True)
    
    class Meta:
        model = UserDevotion
        fields = '__all__'