from django.db.models import Sum, Avg
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from worldapp.models import Country, City, CountryLanguage
from worldapp.serializers import CountrySerializer, CitySerializer, RegionSerializer, ContinentSerializer, \
    CountryLanguageSerializer


class CountryViewSet(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    filterset_fields = ('continent', 'region')

    def get_queryset(self):
        return Country.objects.all().annotate(avg_life=Avg('lifeexpectancy'))


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    filterset_fields = ('countrycode', 'district')


class CountryLanguageViewSet(viewsets.ModelViewSet):
    queryset = CountryLanguage.objects.all()
    serializer_class = CountryLanguageSerializer
    filterset_fields = ('countrycode',)


class ContinentApiView(APIView):
    def get(self, request):
        continents = Country.objects.values('continent').\
            annotate(total_population=Sum('population'),
                     avg_life=Avg('lifeexpectancy'),
                     total_gnp=Sum('gnp'))
        serialized = ContinentSerializer(continents, many=True)
        return Response(serialized.data)


class RegionsApiView(APIView):
    def get(self, request):
        regions = Country.objects.filter(continent__iexact=request.query_params.get('continent')).\
            values('region').annotate(total_population=Sum('population'),
                                      avg_life=Avg('lifeexpectancy'),
                                      total_gnp=Sum('gnp'))
        serialized = RegionSerializer(regions, many=True)
        return Response(serialized.data)


class RegionApiView(APIView):
    def get(self, request):
        region = Country.objects.filter(region__iexact=request.query_params.get('region')).first()
        serialized = CountrySerializer(region)
        return Response(serialized.data)
