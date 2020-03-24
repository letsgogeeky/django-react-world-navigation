from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from worldapp.models import Country, City
from worldapp.serializers import CountrySerializer, CitySerializer


def char_count(request):
    text = request.GET.get("text", "")

    return JsonResponse({"count": len(text)})


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    filterset_fields = ('continent', 'region')


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    filterset_fields = ('countrycode', 'district')


class ContinentApiView(APIView):
    def get(self, request):
        continents = Country.objects.distinct('continent')
        serialized = CountrySerializer(continents, many=True)
        return Response(serialized.data)
