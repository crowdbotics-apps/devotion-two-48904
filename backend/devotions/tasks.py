from .models import UserDevotions
from users.models import UserProfile
from devices.utils import send_fcm_notification

def create_user_devotions_task(devotion):
	users = UserProfile.objects.filter(devotion=devotion.devotion, pronoun=devotion.pronoun)

	for user in users:
		# Trigger notifications 
		UserDevotions.objects.create(user_id=user.user, **devotion)
		# TODO - Add a notification title
		send_fcm_notification(user.user, "title", devotion.devotion)
	