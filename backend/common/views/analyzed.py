from django.views import generic

from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from backend.common.models.analyzed import Analyzed, AnalyzedBaseSerializer

class AnalyzedRestViewSet(viewsets.ModelViewSet):
    queryset = Analyzed.objects.all()

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='anal',
    )
    def rest_check(self, request):
        # AnalyzedSerializer
        {"result": self.queryset}
        result = {"result": self.queryset}
        return Response(
            result,
            status=status.HTTP_200_OK,
        )

    # examples
    # https://stackoverflow.com/questions/22194499/django-rest-framework-nested-urls-with-drf-nested-routers

    # def list(self, request, domain_pk=None):
    #     queryset = self.queryset.filter(domain=domain_pk)
    #     serializer = NameserverSerializer(queryset, many=True)
    #     return Response(serializer.data)

    # def retrieve(self, request, pk=None, domain_pk=None):
    #     queryset = self.queryset.get(pk=pk, domain=domain_pk)
    #     serializer = NameserverSerializer(queryset)
    #     return Response(serializer.data)
