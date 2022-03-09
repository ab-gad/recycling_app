# Generated by Django 3.1.7 on 2022-03-08 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_auto_20220308_1807'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='avatar',
            field=models.ImageField(blank=True, default='profile_images/default-pic.jpeg', null=True, upload_to='profile_images', verbose_name='profile picture'),
        ),
        migrations.AlterField(
            model_name='comments',
            name='userName',
            field=models.CharField(blank=True, default=None, max_length=100, null=True, verbose_name='first name'),
        ),
    ]