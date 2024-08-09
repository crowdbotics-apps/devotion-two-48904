from .models import UserDevotions
from users.models import UserProfile

def create_user_devotions_task(devotion):
	users = UserProfile.objects.filter(devotion=devotion.devotion, pronoun=devotion.pronoun)

	for user in users:
		# Trigger notifications 
		UserDevotions.objects.create(user_id=user.user, **devotion)


	