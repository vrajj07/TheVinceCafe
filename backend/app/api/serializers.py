from rest_framework.serializers import ModelSerializer
from ..models import Reservation,Menu,Cart,Subscribe,CheckoutPage


class ReservationSerializer(ModelSerializer):
    class Meta:
        model = Reservation
        fields= '__all__'
class MenuSerializer(ModelSerializer):
    class Meta:
        model = Menu
        fields= '__all__'
class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields= '__all__'
class SubscribeSerializer(ModelSerializer):
    class Meta:
        model = Subscribe
        fields= '__all__'   
class CheckoutPageSerializer(ModelSerializer):
    class Meta:
        model = CheckoutPage
        fields= '__all__'        