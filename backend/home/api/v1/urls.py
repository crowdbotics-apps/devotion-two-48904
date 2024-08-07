from django.urls import include, path
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (LoginViewSet, SignupViewSet,
                                  UserDevotionCalendarView, UserDevotionView)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")

userRouter = DefaultRouter()
# userRouter.register(r"devotions", UserDevotionView, basename="devotion")
# userRouter.register(r"calendar", UserDevotionCalendarView, basename="calendar")

urlpatterns = [
    path("", include(router.urls)),
    path("user/", include(userRouter.urls)),
]
