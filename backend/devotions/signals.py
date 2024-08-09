import django_rq
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from .models import Devotions
from .tasks import create_user_devotions_task

@receiver(post_save, sender=Devotions)
def create_user_devotions(sender, instance, created, **kwargs):
   if created:
        queue = django_rq.get_queue('default')
        run_at = instance.schedule_at
        current_time = timezone.now()

        if run_at <= current_time:
            # If the scheduled time has passed, run the task immediately
            queue.enqueue(create_user_devotions_task, instance.id, instance)
        else:
            # Otherwise, schedule the task to run at the specified time
            queue.enqueue_at(run_at, create_user_devotions_task, instance.id, instance)