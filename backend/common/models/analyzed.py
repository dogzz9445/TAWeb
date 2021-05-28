from django.db import models
from django.utils.translation import ugettext_lazy as _

from model_utils.fields import AutoCreatedField, AutoLastModifiedField


class Analyzed(models.Model):
    version = models.IntegerField(db_index=True)
    analyze_period = models.IntegerField(db_index=True)
    target_start_date = models.DateTimeField(db_index=True)
    target_end_date = models.DateTimeField(db_index=True)
    target_date = models.DateTimeField(db_index=True)
    json_result = models.JSONField(db_index=True)

    class Meta:
        abstract = True
