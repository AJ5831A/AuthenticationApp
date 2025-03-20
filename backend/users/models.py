from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager): # CustomUserManager extends Django’s BaseUserManager to provide custom logic for creating users and superusers 
    def create_user(self, email , password=None, **extra_fields):
        if not email: #checks if email is empty
            raise ValueError('Email is required')
        
        email = self.normalize_email(email) #.normalise converts email to lowercase 
        user = self.model(email=email, **extra_fields) #creates a new user with email and  extra fields
        user.set_password(password) #Hashes the password for security
        user.save(using=self._db) # saves the user to the database
        return user 

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True) #sets is_staff to true
        extra_fields.setdefault('is_superuser', True) # sets is_superuser to true
        return self.create_user(email, password, **extra_fields) # calls the create_user method to create the superuser

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200 , unique=True)  # email field is unique 
    birthday = models.DateField(null=True, blank=True) # birthday field is nullable and can be blank
    username = models.CharField(max_length=200, unique=False, null=True, blank=True, default=None) # username field is nullable and can be blank if not provided default value is None

    objects = CustomUserManager() # sets the custom user manager

    USERNAME_FIELD = 'email' # sets email as the username field Now, users log in using their email instead of a username.
    REQUIRED_FIELDS = []  # no required fields other than email
