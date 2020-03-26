
from django.conf.urls import url, include

from django.urls import path
from rest_framework.routers import DefaultRouter


from worldapp.views import CountryViewSet, CityViewSet, ContinentApiView, RegionApiView, RegionsApiView, \
    CountryLanguageViewSet

router = DefaultRouter()

router.register(r'country', CountryViewSet, basename='Country')
router.register(r'city', CityViewSet, basename='City')
router.register(r'language', CountryLanguageViewSet, basename='Language')
urlpatterns = [
    path('api/continents/', ContinentApiView.as_view(), name='continents'),
    path('api/regions/', RegionsApiView.as_view(), name='regions'),
    path('api/region/', RegionApiView.as_view(), name='region'),
    url('^api/', include(router.urls))
]
