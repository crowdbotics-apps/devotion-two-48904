"""devotion_two_48904 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from allauth.account.views import confirm_email
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic.base import TemplateView
from drf_spectacular.views import (SpectacularJSONAPIView,
                                   SpectacularSwaggerView)
from rest_framework import permissions
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Devotion API')

urlpatterns = [
    path("accounts/", include("allauth.urls")),
    path("modules/", include("modules.urls")),
    # path("api/v1/", include("home.api.v1.urls")),
    path("admin/", admin.site.urls),
    path("users/", include("users.urls", namespace="users")),
    # path('devices/', include('devices.api.v1.urls', namespace='devices')),
    path('api/v1/devotions/', include('devotions.api.v1.urls', namespace='devotions')),
    path("rest-auth/", include("dj_rest_auth.urls")),
    # Override email confirm to use allauth's HTML view instead of rest_auth's API view
    path("rest-auth/registration/account-confirm-email/<str:key>/", confirm_email),
    path("rest-auth/registration/", include("dj_rest_auth.registration.urls")),
]

admin.site.site_header = "Devotion Two"
admin.site.site_title = "Devotion Two Admin Portal"
admin.site.index_title = "Devotion Two Admin"

# swagger
urlpatterns += [
    path("api-docs/schema/", SpectacularJSONAPIView.as_view(), name="schema"),
    path("api-docs/", SpectacularSwaggerView.as_view(url_name='schema'), name="api_docs")
]


# urlpatterns += [re_path(r".*",TemplateView.as_view(template_name='index.html'))]
