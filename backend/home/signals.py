import threading
import time
from datetime import datetime, timezone

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from users.models import User

from .models import Devotion, UserDevotion, UserProfile

# @receiver(post_save, sender=Devotion)
# def on_save(sender, instance, *args, **kwargs):
#     print("Signal handler called")
#     # TODO @ian check performance
#     # if kwargs.get('created', False):
#     now = datetime.now(timezone.utc)
#     print("=======>",instance.schedule_at, now)
#         # if instance.schedule_at < now:
#         #     user_profiles = UserProfile.objects.filter(devotion=instance.devotion, pronoun=instance.pronoun)
#         #     if user_profiles.exists():
#         #         t = threading.Thread(target=user_profiles, args=[user_profiles, instance])
#         #         t.setDaemon(True)
#         #         t.start()
        
@receiver(post_save, sender=Devotion)
def devotion_model_post_save(sender, created, instance, **kwargs):
    if not created and instance.pk:
        print("Signal handler called")
    if created:
        user_profiles = UserProfile.objects.filter(devotion=instance.devotion, pronoun=instance.pronoun)
        process_devotion_creation(user_profiles, instance)
        # from stripe_payments.utils import user_create_stripe_account
        print(" ======> Signal handler called ======> ", created)

def process_devotion_creation(user_profiles, devotion):
    for user_profile in user_profiles:
        UserDevotion.objects.create(devotion=devotion, user=user_profile.user)
        # TODO @ian Send push notification
