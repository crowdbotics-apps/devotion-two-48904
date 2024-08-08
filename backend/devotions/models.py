from django.db import models

class PRONOUN_CHOICES(models.IntegerChoices):
    SHE_HER = 0, 'She/Her'
    THEY_THEM = 1, 'They/Them'
    HE_HIM = 2, 'He/Him'
    OTHER = 3, 'Other'

class DEVOTION_CHOICES(models.IntegerChoices):
    CONTENT = 0, 'Content'
    ANXIOUS = 1, 'Anxious'
    BRAVE = 2, 'Brave'
    LONELY = 3, 'Lonely'

class Devotions(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    pronoun = models.IntegerField(
        choices=PRONOUN_CHOICES.choices, null=False, blank=False)
    devotion = models.IntegerField(
        choices=DEVOTION_CHOICES.choices, null=False, blank=False
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class UserDevotions(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    devotion = models.ForeignKey(Devotions, on_delete=models.CASCADE)
    is_favorite = models.BooleanField(default=False)
    # Use provided scheduled date if not, use now
    schedule_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username + "-" + self.devotion.title
