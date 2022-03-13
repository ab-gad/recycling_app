
from email.policy import default
from xml.parsers.expat import model
from django.db import models
from django.utils import timezone
import datetime
from user.models import User
from datetime import timedelta


def in_fourteen_days():
    return timezone.now() + timedelta(days=14)

class Events(models.Model):
    title = models.CharField(max_length=50, unique=True)
    details = models.TextField(max_length=2000)
    target = models.PositiveIntegerField(null=True)
    start_date = models.DateTimeField(default=timezone.now)
    end_date = models.DateTimeField(default=in_fourteen_days)
    creation_date = models.DateTimeField(default=timezone.now)
    location = models.CharField(max_length=400)
    img = models.ImageField(upload_to='Events', verbose_name='Image')
    useradmin = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    volunteers = models.ManyToManyField('user.User',related_name='myevents')
    interests = models.ManyToManyField('user.User',related_name='myinterests')

    class Meta:
        verbose_name = ("Event")
        verbose_name_plural = ("Events")
        ordering=('-creation_date',)

    def __str__(self):
        return str(self.title)

    errors = {}

    def clean(self):

        valid = True
        start_date = self.start_date
        end_date = self.end_date
        self.errors = {}
        if str(start_date) < str(datetime.date.today()):
            self.errors['date'] = 'invalid date'
            valid = False
        elif str(end_date) == str(start_date):
            self.errors['date'] = 'invalid date'
            valid = False
        elif str(end_date) < str(start_date):
            self.errors['date'] = 'invalid date'
            # 'End date should be greater than start date.'
            valid = False
        elif str(end_date) == str(datetime.date.today()):
            self.errors['date'] = 'invalid date'
            valid = False
        if self.title == '':
            self.errors['title'] = 'title is required'
            valid = False
        if self.details == '':
            self.errors['details'] = 'details is required'
            valid = False
        if self.location == '':
            self.errors['location'] = 'location is required'
            valid = False
        return valid


class Comments(models.Model):
    comment = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments', default=None)
    event = models.ForeignKey(Events, on_delete=models.CASCADE, related_name='comments', default=None)
    creation_date = models.DateTimeField(default=timezone.now)

    avatar = models.ImageField( blank=True, null=True,
        upload_to="profile_images", verbose_name='profile picture', default='profile_images/default-pic.jpeg')
    userName= models.CharField(max_length=100, verbose_name='first name', default=None, blank=True, null=True)
    
    class Meta:
        verbose_name = ("Comment")
        verbose_name_plural = ("Comments")
        ordering=('-creation_date',)

    def save(self, *args, **kwargs):
        self.avatar = self.user.avatar
        self.userName = self.user
        super(Comments, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.id} || {self.userName}'