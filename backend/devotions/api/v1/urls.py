from django.urls import path

from . import views

app_name = 'devotions'

urlpatterns = [
    path('', views.DevotionsListCreateAPIView.as_view(),
         name='devotions-list-create'),
    path('<int:pk>/', views.DevotionsRetrieveUpdateDestroyAPIView.as_view(),
         name='devotions-retrieve-update-destroy'),
    path('user-devotions/', views.UserDevotionsListCreateAPIView.as_view(),
         name='user-devotions-list-create'),
    path('user-devotions/<int:pk>/', views.UserDevotionsRetrieveUpdateDestroyAPIView.as_view(),
         name='user-devotions-retrieve-update-destroy'),
    path('user-devotions/favorites/', views.UserDevotionsFavoritesListAPIView.as_view(),
         name='user-devotions-favorites-list'),
    path('user-devotions/favorites/<int:pk>/', views.UserDevotionsFavoritesRetrieveUpdateAPIView.as_view(),
         name='user-devotions-favorites-retrieve-update'),
    # path('user-devotions/scheduled/', views.UserDevotionsScheduledListAPIView.as_view(), name='user-devotions-scheduled-list'),
    # path('user-devotions/scheduled/<int:pk>/', views.UserDevotionsScheduledRetrieveUpdateAPIView.as_view(), name='user-devotions-scheduled-retrieve-update'),
    # path('user-devotions/scheduled/today/', views.UserDevotionsScheduledTodayListAPIView.as_view(), name='user-devotions-scheduled-today-list'),
    # path('user-devotions/scheduled/tomorrow/', views.UserDevotionsScheduledTomorrowListAPIView.as_view(), name='user-devotions-scheduled-tomorrow-list'),
    # path('user-devotions/scheduled/week/', views.UserDevotionsScheduledWeekListAPIView.as_view(), name='user-devotions-scheduled-week-list'),
    # path('user-devotions/scheduled/month/', views.UserDevotionsScheduledMonthListAPIView.as_view(), name='user-devotions-scheduled-month-list'),
    # path('user-devotions/scheduled/year/', views.UserDevotionsScheduledYearListAPIView.as_view(), name='user-devotions-scheduled-year-list'),
    # path('user-devotions/scheduled/next/', views.UserDevotionsScheduledNextListAPIView.as_view(), name='user-devotions-scheduled-next-list'),
    # path('user-devotions/scheduled/previous/', views.UserDevotionsScheduledPreviousListAPIView.as_view(), name='user-devotions-scheduled-previous-list'),
    # path('user-devotions/scheduled/<int:pk>/next/', views.UserDevotionsScheduledNextRetrieveAPIView.as_view(), name='user-devotions-scheduled-next-retrieve'),
]
