# Generated by Django 4.0.2 on 2022-02-23 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_rename_cdcity_userlocation_city'),
    ]

    operations = [
        migrations.AddField(
            model_name='userlocation',
            name='latitude',
            field=models.FloatField(blank=True, null=True, verbose_name='Latitude'),
        ),
        migrations.AddField(
            model_name='userlocation',
            name='longitude',
            field=models.FloatField(blank=True, null=True, verbose_name='Longitude'),
        ),
    ]
