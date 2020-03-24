from django.db import models


class City(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    countrycode = models.CharField(max_length=3)
    district = models.TextField()
    population = models.IntegerField()

    class Meta:
        db_table = 'city'


class Country(models.Model):
    code = models.CharField(primary_key=True, max_length=3)
    name = models.TextField()
    continent = models.TextField()
    region = models.TextField()
    surfacearea = models.FloatField()
    indepyear = models.SmallIntegerField(blank=True, null=True)
    population = models.IntegerField()
    lifeexpectancy = models.FloatField(blank=True, null=True)
    gnp = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    gnpold = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    localname = models.TextField()
    governmentform = models.TextField()
    headofstate = models.TextField(blank=True, null=True)
    capital = models.ForeignKey(City, models.DO_NOTHING, db_column='capital', blank=True, null=True)
    code2 = models.CharField(max_length=2)

    class Meta:
        db_table = 'country'


class Countrylanguage(models.Model):
    countrycode = models.OneToOneField(Country, models.DO_NOTHING, db_column='countrycode', primary_key=True)
    language = models.TextField()
    isofficial = models.BooleanField()
    percentage = models.FloatField()

    class Meta:
        db_table = 'countrylanguage'
        unique_together = (('countrycode', 'language'),)