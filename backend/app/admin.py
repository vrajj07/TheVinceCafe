from django.contrib import admin
from .models import Reservation,Menu,Cart,Subscribe,CheckoutPage
# Register your models here.

admin.site.register(Reservation)
admin.site.register(Menu)
admin.site.register(Cart)
class SubscribeAdmin(admin.ModelAdmin):
    list_display = ('email', 'contactDate')  
    date_hierarchy = 'contactDate'          

admin.site.register(Subscribe, SubscribeAdmin)
admin.site.register(CheckoutPage)