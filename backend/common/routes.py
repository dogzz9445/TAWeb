from common.api.views.base import RestViewSet
from common.api.views.analyzed import AnalyzedRestViewSet

routes = [
    {'regex': r'rest', 'viewset': RestViewSet, 'basename': 'Rest'},
    {'regex': r'analyzed', 'viewset': AnalyzedRestViewSet, 'basename': 'Analyzed'}
]
