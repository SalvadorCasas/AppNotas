#Rest imports
from rest_framework import serializers

#Models imports
from apps.users.models import User

#Serializers
class UserSerializers(serializers.ModelSerializer):
  class Meta:
    model=User
    fields='__all__'

  def create(self, validated_data):
        """
        Correción la encriptacion de la password al crear un usuario.
        """
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        return user
