# Generated by Django 3.1.7 on 2022-03-14 10:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_auto_20220308_1815'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comments',
            options={'ordering': ('-creation_date',), 'verbose_name': 'Comment', 'verbose_name_plural': 'Comments'},
        ),
        migrations.AlterModelOptions(
            name='events',
            options={'ordering': ('-creation_date',), 'verbose_name': 'Event', 'verbose_name_plural': 'Events'},
        ),
    ]
