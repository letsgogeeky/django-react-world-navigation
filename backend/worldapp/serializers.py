from rest_framework import serializers

from worldapp.models import Country, City


class CountrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Country
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    region = serializers.CharField()
    total_population = serializers.IntegerField()
    avg_life = serializers.DecimalField(max_digits=5, decimal_places=2)
    total_gnp = serializers.IntegerField()

    class Meta:
        model = Country
        fields = ('region', 'total_population', 'avg_life', 'total_gnp')


class ContinentSerializer(serializers.ModelSerializer):
    continent = serializers.CharField()
    total_population = serializers.IntegerField()
    avg_life = serializers.DecimalField(max_digits=5, decimal_places=2)
    total_gnp = serializers.IntegerField()

    class Meta:
        model = Country
        fields = ('continent', 'total_population', 'avg_life', 'total_gnp')



