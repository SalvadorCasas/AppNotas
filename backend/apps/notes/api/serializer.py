#Rest imports
from gettext import translation
from rest_framework import serializers



#Models imports
from apps.notes.models import Notes

#Serializers
class NotesSerializers(serializers.ModelSerializer):
  class Meta:
    model=Notes
    fields='__all__'
