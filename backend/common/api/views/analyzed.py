from builtins import len, range
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from common.api.models.analyzed import Analyzed, AnalyzedBaseSerializer

from datetime import datetime

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
        url_path='target/(?P<target_date>\d+)',
    )
    def target(self, request, target_date=None):
        if target_date == None:
            queryset = Analyzed.objects.all().latest()
        else:
            target_date = datetime.strptime(target_date, "%y%m%d")
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
        url_path='version/(?P<target_date>\d+)/(?P<version>\d+)',
    )
    def version(self, request, target_date=None, version=None):
        target_date = datetime.strptime(target_date, "%y%m%d")
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
        url_path='decks/(?P<target_date>\d+)/(?P<version>\d+)',
    )
    def decks(self, request, target_date=None, version=None):
        queryset = Analyzed.objects.all().filter(target_date=target_date, version=version).latest()
        json_data = AnalyzedBaseSerializer(queryset).data
        num_labels = len(json_data['json_result'][0]['data']['label'])
        deck_data = []
        for idx in range(num_labels):
            deck_data.append(
                {
                    'id' : idx,
                    'traits' : json_data['json_result'][0]['data']['traits'][idx],
                    'win_rate' : json_data['json_result'][0]['data']['win_rate'][idx],
                    'champions' : json_data['json_result'][0]['data']['champions'][idx],
                    'defense_rate' : json_data['json_result'][0]['data']['defence_rate'][idx],
                    'daily_win_rate' : json_data['json_result'][0]['data']['daily_win_rate'][idx]
                }
            )
        this_data = {
            'info' : {
                'start_time' : json_data['json_result'][0]['info']['start_time'],
                'end_time' : json_data['json_result'][0]['info']['end_time'],
                'num_data' : len(deck_data),
            },
            'data' : deck_data
        }

        return Response(
            this_data,
            status=status.HTTP_200_OK,
        )