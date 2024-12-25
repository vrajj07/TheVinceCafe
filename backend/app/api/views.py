from rest_framework.viewsets import ModelViewSet
from ..models import Reservation,Menu,Cart,Subscribe,CheckoutPage
from .serializers import ReservationSerializer,MenuSerializer,CartSerializer,SubscribeSerializer,CheckoutPageSerializer

# @api_view(['GET'])
class ReservationViewSet(ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
class MenuViewSet(ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def create(self, request, *args, **kwargs):
        item = request.data.get('item')
        price = request.data.get('price')
        quantity = request.data.get('quantity', 1)

        if not item or not price:
            return Response({"error": "Item and price are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Check if the item already exists in the cart
            cart_item = Cart.objects.get(item=item)
            cart_item.quantity += int(quantity)
            cart_item.save()
            serializer = self.get_serializer(cart_item)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Cart.DoesNotExist:
            # If the item does not exist, create a new cart item
            return super().create(request, *args, **kwargs)
class SubscribeViewSet(ModelViewSet):
    queryset = Subscribe.objects.all()
    serializer_class = SubscribeSerializer  
class CheckoutPageViewSet(ModelViewSet):
    queryset = CheckoutPage.objects.all()
    serializer_class = CheckoutPageSerializer  