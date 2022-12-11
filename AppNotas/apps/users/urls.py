#Django import
from django.urls import path

#VIEWS
from apps.users.views import (
    UserApiView,
    UserDetailApiView,
)

#URLS
urlpatterns = [
  path('user/', UserApiView.as_view(), name='user'),
  path('user-detail/<int:pk>/', UserDetailApiView.as_view(), name='user-detail'),
]



