from rest_framework.routers import DefaultRouter

from .views import ReservationViewSet,MenuViewSet,CartViewSet,SubscribeViewSet,CheckoutPageViewSet

app_router = DefaultRouter()
app_router.register(r'Reservation',ReservationViewSet)
app_router.register(r'Menu',MenuViewSet)
app_router.register(r'Cart',CartViewSet)
app_router.register(r'Subscribe',SubscribeViewSet)
app_router.register(r'CheckoutPage',CheckoutPageViewSet)

