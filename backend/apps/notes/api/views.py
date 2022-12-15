#REST IMPORTS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#MODEL IMPORTS
from apps.notes.models import Notes as NotesModel

#SERIALIZERS IMPORTS
from apps.notes.api.serializer import NotesSerializers
#HELPERS
from apps.notes.helpers.note_exist import notesExist


# Create your views here.

class NotesListApiView(APIView):

  def get(self, request):
        """"Retorna un listado con todos las notas"""
        print(f'REQUEST --> {request.method}')
        notes = NotesModel.objects.all()
        notes_serializer = NotesSerializers(notes, many=True)
        return Response(
            data = notes_serializer.data,
            status = status.HTTP_200_OK
        )


class NotesCreateApiView(APIView):
    
  def post(self, request):
    '''Crea un nuevo registro/notas'''
    serializer = NotesSerializers(data=request.data)

    if serializer.is_valid():
            serializer.save()
            data = {
                'message' : 'La nota fue creado de forma correcta'
            }

            return Response(
              data = data,
              status = status.HTTP_201_CREATED
            )

    return Response(
          data=serializer.errors,
          status= status.HTTP_400_BAD_REQUEST
    )

class NotesDetailApiView(APIView):

  def get(self,request,pk):
    """Nos devuelve mas informacion de una nota en particular"""
    try:
          notes = NotesModel.objects.get(pk = pk)

          notes_serializer = NotesSerializers(notes)

          return Response(
              data = notes_serializer.data,
              status = status.HTTP_200_OK
          )
    except:
          data = {
              'message': 'Nota no encontrada'
          }
          return Response(
            data = data,
              status = status.HTTP_400_BAD_REQUEST
          )

  def delete(self,request,pk):
        """Elimina un registro"""
        note = notesExist(pk)
        notedel = NotesModel.objects.get(pk=pk)

        if note:
            notedel.delete()
            data = {
                "La nota fue eliminada de forma correcta"
            }
            return Response(
                        data = data,
                        status = status.HTTP_200_OK
            )
        return Response(
            data=NotesSerializers.errors,
            status = status.HTTP_400_BAD_REQUEST
        )

  def put(self, request, pk):
        """Modifica un registro"""

        note = NotesModel.objects.get(pk=pk)
        serializer = NotesSerializers(note, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Nota modificada correctamente'},
                status=status.HTTP_200_OK
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )