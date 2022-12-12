#Django import
from django.urls import path

#VIEWS
from apps.notes.api.views import (
    NotesListApiView,
    NotesCreateApiView,
    NotesDetailApiView,
)

#URLS
urlpatterns = [
  path('notes-list/', NotesListApiView.as_view(), name='notes-list'),
  path('note-detail/<int:pk>/', NotesDetailApiView.as_view(), name='note-detail'),
  path('note-create/', NotesCreateApiView.as_view(), name='note-create'),
]