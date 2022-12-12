from apps.notes.models import Notes

def notesExist(pk):
  try:
    note=Notes.objects.get(id=pk)

    return True, note
  except:
    return False