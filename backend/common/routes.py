from backend.common.views.apis.base import RestViewSet
from backend.common.views.apis.analyzed import AnalyzedRestViewSet

routes = [
    {'regex': r'rest', 'viewset': RestViewSet, 'basename': 'Rest'},
    {'regex': r'analyzed', 'viewset': AnalyzedRestViewSet, 'basename': 'Analyzed'}
]
