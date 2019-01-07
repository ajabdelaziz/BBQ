from django_hstore import hstore
from django.db import models

# Create your models here.


class BBQers(models.Model):
    name = models.CharField(help_text="BBQ participants name", max_length=100)
    email = models.EmailField(help_text="Participants email address for contact")
    hs_data = hstore.DictionaryField(
        default="", null=True,
        blank=True, help_text="event_id: supplies being brought by user"
    )


class Location(models.Model):
    name = models.CharField(help_text="name of location", max_length=100)
    description = models.TextField(help_text="brief description of the event")
    photo_url = models.URLField(help_text="url to image to display")
    address = models.CharField(help_text="location of location", max_length=100)
    latitude = models.FloatField(help_text="internal only to easily work with google maps")
    longitude = models.FloatField(help_text="internal only to easily work with google maps")
    website = models.URLField(help_text="url to website of location")
    hours = models.CharField(help_text="hours of location", max_length=100)


class Events(models.Model):
    name = models.CharField(help_text="events name", max_length=100)
    participant = models.ForeignKey(BBQers, related_name="BBQers_events", on_delete=models.CASCADE)
    location = models.CharField(help_text="location of event", max_length=100)
    date = models.DateTimeField(help_text="time and date of event")
    description = models.TextField(help_text="brief description of the event")
