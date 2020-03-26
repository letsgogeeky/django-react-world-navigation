"""world URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include

from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter


from worldapp.views import char_count, CountryViewSet, CityViewSet, ContinentApiView, RegionApiView, RegionsApiView

router = DefaultRouter()

router.register(r'country', CountryViewSet, basename='Country')
router.register(r'city', CityViewSet, basename='City')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('char_count', char_count, name='char_count'),
    path('continents/', ContinentApiView.as_view(), name='continents'),
    path('regions/', RegionsApiView.as_view(), name='regions'),
    path('region/', RegionApiView.as_view(), name='regions'),
    url('^', include(router.urls))
]
