from django.conf import settings
import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('phone', models.IntegerField()),
                ('paper_q', models.IntegerField()),
                ('plastic_q', models.IntegerField()),
                ('metal_q', models.IntegerField()),
                ('total_price', models.FloatField()),
                ('city', models.CharField(max_length=50)),
                ('address', models.TextField()),
                ('latitude', models.FloatField(blank=True, null=True, verbose_name='Latitude')),
                ('longitude', models.FloatField(blank=True, null=True, verbose_name='Longitude')),
                ('location', django.contrib.gis.db.models.fields.PointField(blank=True, null=True, srid=4326)),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('user_id', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
