# from django.urls import path
# from . import views

# urlpatterns = [
#     path('products/', views.get_products),
#     path('products/<int:id>', views.get_product),
#     path('categories/', views.get_categories),
#     path('categories/<int:id>', views.get_category),
#     path('categories/<int:id>/products/', views.get_category_products),
# ]

from django.urls import path
from api         import views


urlpatterns = [
    path('products/', views.ProductListAPIView.as_view() if hasattr(views, 'ProductListAPIView') else views.products_list),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view() if hasattr(views, 'ProductDetailAPIView') else views.product_detail),

    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', views.CategoryProductsAPIView.as_view()),
]