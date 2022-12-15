#REST IMPORTS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication


# DJANGO IMPORTS
from django.contrib.sessions.models import Session


# PYTHON IMPORTS
from datetime import datetime


#MODEL IMPORTS
from apps.users.models import User as UserModel



#SERIALIZERS IMPORTS
from apps.users.api.serializer import *
#HELPERS
from apps.users.helpers.user_exist import userExist
# Create your views here.

class UserListApiView(APIView):

  def get(self, request):
        """"Retorna un listado con todos los usuarios almacenados en la base"""
        print(f'REQUEST --> {request.method}')
        users = UserModel.objects.all()
        user_serializer = UserSerializers(users, many=True)
        return Response(
            data = user_serializer.data,
            status = status.HTTP_200_OK
        )


class UserCreateApiView(APIView):
    
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
    """Nos devuelve mas informacion de un usuario en particular"""
    try:
          user = UserModel.objects.get(pk = pk)

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
        userdel = UserModel.objects.get(pk=pk)

        if user:
            userdel.delete()
            data = {
                "El usuario fue eliminado de forma correcta"
            }
            return Response(
                        data = data,
                        status = status.HTTP_200_OK
            )
        return Response(
            data=UserSerializers.errors,
            status = status.HTTP_400_BAD_REQUEST
        )


class Login(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        print(request.data)
        login_serializer = self.serializer_class(data=request.data, context = {'request':request})
        if login_serializer.is_valid():
            
            user = login_serializer.validated_data['user']

            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                user_serializer = UserTokenSerializer(user)

                if created:
                    return Response(
                        {'token': token.key,
                        'user': user_serializer.data
                        },
                        status=status.HTTP_200_OK
                    )
                
                else:
                    token.delete()
                    token = Token.objects.create(user=user)

                    return Response(
                        {'token': token.key,
                        'user': user_serializer.data
                        },
                        status=status.HTTP_200_OK
                    )

            else:
                return Response(
                    {'error': 'Este usuario no puede iniciar sesión'},
                    status=status.HTTP_401_UNAUTHORIZED
                )

        else:
            return Response(
                {'error': 'Username o password incorrectos'},
                status=status.HTTP_400_BAD_REQUEST
            )


class Logout(APIView):

    def post(self, request, *args, **kwargs):

        try:
            token = Token.objects.get(key=request.data['token'])
            
            if token:
                user = token.user
                all_sessions = Session.objects.filter(expire_date__gte=datetime.now())

                if all_sessions.exists():
                    for session in all_sessions:
                        session_data = session.get_decoded()
                        
                        if user.id == int(session_data.get('_auth_user_id')):
                            session.delete()
                
                token.delete()

                return Response(
                    {'message': "Sesión finalizada"},
                    status=status.HTTP_200_OK
                )
            
            return Response(
                {'error': 'Token no encontrado'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        except:
            return Response(
                {'error': 'No se ha encontrado token en la peticion'},
                status=status.HTTP_409_CONFLICT
            )