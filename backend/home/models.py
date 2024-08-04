import threading
import time

from django.db import models
from django.dispatch import receiver

from users.models import User

PRONOUN_CHOICES = (('0', "She/Her"),
                        ('1', "They/Them"),
                        ('2', "He/Him"),
                        ('3', "Other"))

DEVOTION_CHOICES = (('0', "Content"),
                    ('1', "Anxious"),
                    ('2', "Brave"),
                    ('3', "Lonely"))

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    devotion = models.CharField(max_length=20, choices=DEVOTION_CHOICES)
    pronoun = models.CharField(max_length=20, choices=PRONOUN_CHOICES)
    # TODO @ian support subscriptions
    # is_premium = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'User Profiles'
        managed = True

class UserDevices(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    device_token = models.TextField(blank=False, null=False)
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'User Devices'
        ordering = ('created_at',)

class Devotion(models.Model):
    pronoun = models.CharField(max_length=20, choices=PRONOUN_CHOICES, default="1")
    devotion = models.CharField(max_length=20, choices=DEVOTION_CHOICES, default="0")
    
    message = models.TextField(blank=True, null=True, default="")
    
    # Use provided scheduled date if not, use now
    schedule_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.get_devotion_display()) + "-" + str(self.get_pronoun_display())

    class Meta:
        verbose_name_plural = 'Devotions'
        ordering =  ('created_at',)

@receiver(models.signals.post_save, sender=Devotion)
def on_save(sender, instance, *args, **kwargs):
    # TODO @ian check performance
    if kwargs.get('created', False):
        now = time.timezone.now().date()
        if instance.schedule_at < now:
            userProfiles = UserProfile.objects.filter(devotion=instance.devotion, pronoun=instance.pronoun)
            if userProfiles:
                t = threading.Thread(target=userProfiles, args=[userProfiles, instance])
                t.setDaemon(True)
                t.start()

def process_devotion_creation(userProfiles, devotion):
    time.sleep(3)
    for userProfile in userProfiles:
        UserDevotion.objects.create(devotion=devotion, user=userProfile.user)
        # TODO @ian Send push notification

class UserDevotion(models.Model):    
    devotion = models.OneToOneField(Devotion, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'User Devotions'
        ordering = ('created_at',)


