from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator

class Reservation(models.Model):
    resName = models.CharField(max_length=50)
    resEmail = models.CharField(max_length=50)
    resPhone = models.CharField(max_length=10)
    resDate = models.CharField(max_length=50)
    resTime = models.CharField(max_length=50)
    resPeople = models.CharField(max_length=50)
    resMessage = models.CharField(max_length=255, blank=True, null=True)
    resCreated = models.DateTimeField(default=timezone.now)  # Set default as current time

    def __str__(self):
        return f"{self.resEmail} - {self.resDate} at {self.resTime}"

class Menu(models.Model):
    name=models.CharField( max_length=50)
    image=models.CharField( max_length=250)
    description=models.CharField( max_length=50)
    price=models.CharField( max_length=50)
    category=models.CharField( max_length=50)
    calories=models.CharField( max_length=50)
    protein=models.CharField( max_length=50)
    fat=models.CharField( max_length=50)
    carbs=models.CharField( max_length=50)
    def __str__(self):
        return self.name

class Cart(models.Model):
    item = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image= models.CharField(max_length=250)
    quantity = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)])  # Enforce minimum quantity

    def __str__(self):
        return f"{self.item} (x{self.quantity})"

class Subscribe(models.Model):
    email=models.CharField( max_length=50,unique=True)
    contactDate=models.DateTimeField( auto_now_add=True)     

class CheckoutPage(models.Model):
    customer_name = models.CharField(max_length=255)
    customer_email = models.EmailField()
    customer_phone = models.CharField(max_length=10)  # Adjust max_length based on expected phone format
    table_number = models.PositiveIntegerField()
    special_instructions = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.customer_name} - Table {self.table_number}"   