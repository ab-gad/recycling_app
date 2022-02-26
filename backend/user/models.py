from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
# to customise the default User model
# 1. AbstractBaseUser to extend from it > newUsr(AbstractBaseUser)
# 2. PermissionsMixin to give u the apility to hook into django permissions (a must step) >  newUsr(AbstractBaseUser, PermissionsMixin)
# 3. write a manager for new custome user model > if your user model defines different fields, you’ll need to define a custom manager that extends BaseUserManager providing two additional methods:

from django.core.validators import RegexValidator
from django.db import models
from django.urls import reverse

from django.contrib.gis.db import models
from django.contrib.gis.geos import Point


# to get the date and time of registration > timezone.now 
from django.utils import timezone

# Create your models here.
PHONE_REGEX = RegexValidator(
    r'^01[0125][0-9]{8}$', 'Egyptian phone number is required')


class UserManager(BaseUserManager):
# we can use **other_fields as the last parameter in our fun. and when using self.model 
    def create_user(self, email, first_name, last_name='', password=None, is_active=True, is_staff=False, is_superuser=False):
        
        if not email:
            raise ValueError("Users must have an email address")
        if not password:
            raise ValueError("Users must have a password")
        if not first_name:
            raise ValueError("Users must have a first name")

        # >>> 2nd
        
        email=self.normalize_email(email) 
        user_obj = self.model(
            email=email,
            first_name=first_name,
            last_name=last_name
        )

        user_obj.set_password(password)  # change user password
        user_obj.is_staff = is_staff
        user_obj.is_superuser = is_superuser
        user_obj.is_active = is_active
        
        # >>> 3rd
        user_obj.save(using=self._db)


        # >>> don't forget to return the user Object
        return user_obj

    def create_staffuser(self, email, first_name, last_name, password=None):
        user = self.create_user(
            email,
            first_name=first_name,
            last_name=last_name,
            password=password,
            is_staff=True
        )
        return user

    
    def create_superuser(self, email, first_name, last_name, password=None):
        user = self.create_user(
            email,
            first_name=first_name,
            last_name=last_name,
            password=password,
            is_staff=True,
            is_superuser=True
        )
        return user
    
#verbose_name is a human-readable name for the field. If the verbose name isn’t given, Django will automatically create it using the field’s attribute name, converting underscores to spaces.
# This attribute in general changes the field name in admin interface.
#blank determines whether the field will be required in forms. This includes the admin and your custom forms. If blank=True then the field will not be required, whereas if it's False the field cannot be blank.

class User (AbstractBaseUser, PermissionsMixin):

    # Essentials
    email = models.EmailField(
        max_length=255, verbose_name='email', unique=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(
        blank=True, null=True, verbose_name='last login')

    #Any field with the auto_now attribute set will also inherit editable=False and therefore will not show up in the admin panel. 
    date_joined = models.DateTimeField(auto_now_add=True)
    start_date = models.DateTimeField(default = timezone.now)

    # Extras
    first_name = models.CharField(max_length=20, verbose_name='first name')
    last_name = models.CharField(
        max_length=20, default='',  verbose_name='last name')
    phone = models.CharField(max_length=15, validators=[
        PHONE_REGEX], blank=True, null=True, verbose_name='phone')
    avatar = models.ImageField(
        upload_to="profile_images", verbose_name='profile picture', default='profile_images/default-pic.jpeg')
    city = models.CharField(
        max_length=20, blank=True, default='',  verbose_name='city')
    birthdate = models.DateField(
        blank=True, null=True, verbose_name='birthdate')
    address = models.CharField(
        max_length=90, blank=True, default='',  verbose_name='address')
    is_worker = models.BooleanField(default=False)
    is_market = models.BooleanField(default=False)

    #in order to use AbstractBaseUser u have to define these feilds (parameter)
    # 1- USERNAME_FIELD = 'ur Unique User Identifier' which is the email in our case
    # 2- REQUIRED_FIELDS = [] 'list of fields name that will be prompt and added default ones(USERNAME and password fields) when the user try to create a super user'

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name']
    EMAIL_FIELD = 'email'

    # this is how we link between our new custom user model and our manager
    # .. so we telll our new cus Model to use our New manager (IMPORTANT) 
    objects = UserManager()

    def __str__(self):
        # here return the full name (we can return anything we want > return self.email)
        return str(self.first_name + ' ' + self.last_name)

    def get_full_name(self):
        if self.__str__:
            return self.__str__
        return self.email

    def get_short_name(self):
        return self.first_name

    def __unicode__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True


class userLocation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    latitude = models.FloatField(blank=True, null=True, 
    verbose_name='Latitude')
    longitude = models.FloatField(blank=True, null=True, 
    verbose_name='Longitude')
    location = models.PointField(blank=True, null=True)
    city = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    

    def save(self, *args, **kwargs):
        self.location = Point(self.longitude, self.latitude)
        super(userLocation, self).save(*args, **kwargs)  # Call the "real" save() method.

    def __str__(self):
        # here return the full name (we can return anything we want > return self.email)
        return f'{self.user} || {self.city}'


# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     avatar = models.ImageField(
#         upload_to="profile_images", verbose_name='profile picture', default='profile_images/default-pic.jpeg')

#     def get_absolute_url(self):
#         return reverse('user_profile')

