from django.urls import include, path
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (LoginViewSet, SignupViewSet)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")

urlpatterns = [
    path("", include(router.urls)),
]
