# from django.urls import path
# from . import views

# urlpatterns = [
#     path('products/', views.get_products),
#     path('products/<int:id>', views.get_product),
#     path('categories/', views.get_categories),
#     path('categories/<int:id>', views.get_category),
#     path('categories/<int:id>/products/', views.get_category_products),
# ]

from rest_framework.routers import DefaultRouter
from .views                 import CategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register(r"categories", CategoryViewSet, basename="category")
router.register(r"products", ProductViewSet, basename="product")

urlpatterns = router.urls
