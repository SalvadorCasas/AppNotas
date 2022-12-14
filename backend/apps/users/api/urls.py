#Django import
from django.urls import path

#VIEWS
from apps.users.api.views import (
    UserListApiView,
    UserCreateApiView,
    UserDetailApiView,
    Login,
    Logout
)

#URLS
urlpatterns = [
  path('user-list/', UserListApiView.as_view(), name='user-list'),
  path('user-detail/<int:pk>/', UserDetailApiView.as_view(), name='user-detail'),
  path('user-create/', UserCreateApiView.as_view(), name='user-create'),
  path('login/', Login.as_view(), name='login'),
  path('logout/', Logout.as_view(), name='logout'),
]



