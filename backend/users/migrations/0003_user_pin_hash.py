# Generated by Django 3.2.25 on 2024-08-04 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_user_first_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='pin_hash',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]