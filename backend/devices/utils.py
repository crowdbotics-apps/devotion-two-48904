

def send_fcm_notification(user, title, body, data={}):
    from fcm_django.models import FCMDevice
    devices = FCMDevice.objects.filter(user=user)
    if devices:
        try:
            devices.send_message(
                title=title,
                body=body,
                data=data
            )
            return True
        except Exception as err:
            print(err)
            return False
    return False
