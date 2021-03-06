# Generated by Django 2.1.5 on 2019-01-07 14:06

from django.db import migrations, models
import django.db.models.deletion
import django_hstore.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BBQers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='BBQ participants name', max_length=100)),
                ('email', models.EmailField(help_text='Participants email address for contact', max_length=254)),
                ('hs_data', django_hstore.fields.DictionaryField(blank=True, default='', help_text='event_id: supplies being brought by user', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='events name', max_length=100)),
                ('location', models.CharField(help_text='location of event', max_length=100)),
                ('date', models.DateTimeField(help_text='time and date of event')),
                ('description', models.TextField(help_text='brief description of the event')),
                ('participant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='BBQers_events', to='events.BBQers')),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='name of location', max_length=100)),
                ('description', models.TextField(help_text='brief description of the event')),
                ('photo_url', models.URLField(help_text='url to image to display')),
                ('address', models.CharField(help_text='location of location', max_length=100)),
                ('latitude', models.FloatField(help_text='internal only to easily work with google maps')),
                ('longitude', models.FloatField(help_text='internal only to easily work with google maps')),
                ('website', models.URLField(help_text='url to website of location')),
                ('hours', models.CharField(help_text='hours of location', max_length=100)),
            ],
        ),
    ]
