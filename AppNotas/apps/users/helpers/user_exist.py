from apps.users.models import User

def userExist(pk):
  try:
    user=User.objects.get(id=pk)

    return True, user
  except:
    return False