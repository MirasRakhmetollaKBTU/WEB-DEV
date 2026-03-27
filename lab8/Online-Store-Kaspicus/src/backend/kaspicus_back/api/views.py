from pickle import TRUE

from django.shortcuts import render
from django.http      import JsonResponse
from .models          import Product, Category

# Create your views here.
def product_to_json (product: Product):
    return {
        "id"         : product.id,
        "name"       : product.name,
        "price"      : product.price,
        "description": product.description, 
        "count"      : product.count,
        "is_active"  : product.is_active,
        "category"   : product.category.id  
    }

def category_to_json (category: Category):
    return {
        "id"  : category.id,
        "name": category.name
    }

def get_products (request):
    products = Product.objects.all()
    return JsonResponse([product_to_json(p) for p in products], safe=False)

def get_product (request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product_to_json(product))

    except Product.DoesNotExist:
        return JsonResponse({"Error":"Category not found"}, status = 404)
        
def get_categories (request):
    categories = Category.objects.all()
    return JsonResponse([category_to_json(c) for c in categories], safe=False)

def get_category (request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category_to_json(category))

    except Category.DoesNotExist:
        return JsonResponse({"Error":"Category not found"}, status = 404)
        
def get_category_products (request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()

        return JsonResponse([product_to_json(p) for p in products], safe=False)
    
    except Category.DoesNotExist:
        return JsonResponse({"Error": "Category not fund"}, status=404)