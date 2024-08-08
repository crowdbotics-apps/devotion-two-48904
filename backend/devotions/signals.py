# after user creates devotions on admin , create user devotions on signs with user match user devotion and pronoun
from django.db.models.signals import *
from django.dispatch import receiver

from .models import *
from users.models import UserProfile

@receiver(post_save, sender=Devotions)
def create_user_devotions(sender, instance, created, **kwargs):
    if created:
        users = UserProfile.objects.filter(devotion=instance.devotion, pronoun=instance.pronoun)

        for user in users:
            UserDevotions.objects.create(devotion=instance, user=user.user)
