# Generated by Django 4.0.2 on 2022-03-02 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0002_alter_order_owner_alter_order_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image_url',
            field=models.ImageField(default='product/product.png', upload_to='product', verbose_name='product picture'),
        ),
    ]
