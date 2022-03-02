
from email.policy import default
from xml.parsers.expat import model
from django.db import models
from django.utils import timezone
import datetime
from user.models import User


class Events(models.Model):
    title = models.CharField(max_length=50, unique=True)
    details = models.TextField(max_length=2000)
    start_date = models.DateTimeField(default=timezone.now)
    end_date = models.DateTimeField()
    location = models.CharField(max_length=400)
    img = models.ImageField(upload_to='Events', verbose_name='Image')
    useradmin = models.ForeignKey(User, on_delete=models.CASCADE, default=None)

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
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    # avata = models.ImageField(upload_to='comments',
    #                         verbose_name='Imag', default=None)
    #first = models.CharField(max_length=50)

    # @property
    # def avatar(self):
    #     self.user.avatar

    # @property
    # def first_name(self):
    #     self.user.first_name
