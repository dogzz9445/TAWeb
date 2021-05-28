from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from common.api.models.analyzed import Analyzed, AnalyzedBaseSerializer

class AnalyzedRestViewSet(viewsets.ModelViewSet):
    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='recent',
    )
    def recent(self, request):
        queryset = Analyzed.objects.all().latest()
        serializer = AnalyzedBaseSerializer(queryset)
        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='target',
    )
    def target(self, request, target_date=None):
        if target_date == None:
            queryset = Analyzed.objects.all().latest()
        else:
            # FIXME: to test
            queryset = Analyzed.objects.all().filter(target_date=target_date).latest()
        serializer = AnalyzedBaseSerializer(queryset)
        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='version',
    )
    def version(self, request, target_date=None, version=None):
        queryset = Analyzed.objects.all().filter(target_date=target_date, version=version).latest()
        serializer = AnalyzedBaseSerializer(queryset)
        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='rest_check',
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
