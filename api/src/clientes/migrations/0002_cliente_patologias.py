# Generated by Django 2.2.6 on 2019-10-18 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='patologias',
            field=models.CharField(max_length=500, null=True),
        ),
    ]