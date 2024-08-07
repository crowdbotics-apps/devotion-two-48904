import threading
import time
from datetime import datetime, timezone

from django.contrib.auth import get_user_model
from django.db import models
from django.dispatch import receiver

PRONOUN_CHOICES = ((0, "She/Her"),
                        (1, "They/Them"),
                        (2, "He/Him"),
                        (3, "Other"))

DEVOTION_CHOICES = ((0, "Content"),
                    (1, "Anxious"),
                    (2, "Brave"),
                    (3, "Lonely"))

class UserProfile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name='profile')
    devotion = models.BigIntegerField(choices=DEVOTION_CHOICES, null=True)
    pronoun = models.BigIntegerField(choices=PRONOUN_CHOICES)
    # TODO @ian support subscriptions
    # is_premium = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'User Profiles'

class UserDevices(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    device_token = models.TextField(blank=False, null=False)
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'User Devices'
        ordering = ('created_at',)

class Devotion(models.Model):
    pronoun = models.BigIntegerField(choices=PRONOUN_CHOICES, default=1)
    devotion = models.BigIntegerField(choices=DEVOTION_CHOICES, default=0)
    
    message = models.TextField(blank=True, null=True, default="")
    
    # Use provided scheduled date if not, use now
    schedule_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.get_devotion_display()) + "-" + str(self.get_pronoun_display())

    class Meta:
        verbose_name_plural = 'Devotions'
        ordering =  ('created_at',)

class UserDevotion(models.Model):    
    devotion = models.OneToOneField(Devotion, on_delete=models.CASCADE)
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'User Devotions'


