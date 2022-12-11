#REST IMPORTS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#MODEL IMPORTS
from apps.users.models import User

#SERIALIZERS IMPORTS
from apps.users.serializer import UserSerializers

#HELPERS
from apps.users.helpers.user_exist import userExist
# Create your views here.

class UserApiView(APIView):

  def post(self, request):
    '''Crea un nuevo registro/usuario'''
    serializer = UserSerializers(data=request.data)

    if serializer.is_valid():
            serializer.save()
            data = {
                'message' : 'El usuario fue creado de forma correcta'
            }

            return Response(
              data = data,
              status = status.HTTP_201_CREATED
            )

    return Response(
          data=serializer.errors,
          status= status.HTTP_400_BAD_REQUEST
    )

class UserDetailApiView(APIView):

  def get(self,request,pk):
    """Nos devuelve mas informacion de un heroe en particular"""
    try:
          user = User.objects.get(pk = pk)

          user_serializer = UserSerializers(user)

          return Response(
              data = user_serializer.data,
              status = status.HTTP_200_OK
          )
    except:
          data = {
              'message': 'Usuario no encontrado'
          }
          return Response(
            data = data,
              status = status.HTTP_400_BAD_REQUEST
          )

  def delete(self,request,pk):
        """Elimina un registro"""
        user = userExist(pk)
        if user:
            user.delete()
            data = {
                "El usuario fue eliminado de forma correcta"
            }
            return Response(
                        data = data,
                        status = status.HTTP_200_OK
            )


