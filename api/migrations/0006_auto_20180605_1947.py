# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-05 19:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20180605_1947'),
    ]

    operations = [
        migrations.AlterField(
            model_name='SnippetFoo',
            name='source',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Source'),
        ),
    ]
