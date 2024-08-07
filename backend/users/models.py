from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

PRONOUN_CHOICES = ((0, "She/Her"),
                        (1, "They/Them"),
                        (2, "He/Him"),
                        (3, "Other"))

DEVOTION_CHOICES = ((0, "Content"),
                    (1, "Anxious"),
                    (2, "Brave"),
                    (3, "Lonely"))


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    # devotion = models.BigIntegerField(choices=DEVOTION_CHOICES, null=True)
    # pronoun = models.BigIntegerField(choices=PRONOUN_CHOICES)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
