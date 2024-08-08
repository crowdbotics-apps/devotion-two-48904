# Generated by Django 3.2.25 on 2024-08-08 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_userprofile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='devotion',
            field=models.IntegerField(choices=[(0, 'Content'), (1, 'Anxious'), (2, 'Brave'), (3, 'Lonely')], null=True),
        ),
    ]
