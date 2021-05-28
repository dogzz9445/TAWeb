from django.db import models
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers

class Analyzed(models.Model):
    version = models.IntegerField(db_index=True)
    analyze_period = models.IntegerField(db_index=True)
    target_start_date = models.DateTimeField(db_index=True)
    target_end_date = models.DateTimeField(db_index=True)
    target_date = models.DateTimeField(db_index=True)
    json_result = models.JSONField(db_index=True)

    class Meta:
        get_latest_by = 'id'


class AnalyzedBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analyzed
        fields = (
            'version',
            'analyze_period',
            'target_start_date',
            'target_end_date'
            'target_date'
            'json_result',
        )
        # read_only_fields = (
        #     'version',
        #     'analyze_period',
        #     'target_start_date',
        #     'target_end_date'
        #     'target_date'
        #     'json_result',
        # )