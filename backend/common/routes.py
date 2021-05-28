from .views import RestViewSet
from backend.common.views.analyzed import AnalyzedRestViewSet

routes = [
    {'regex': r'rest', 'viewset': RestViewSet, 'basename': 'Rest'},
    {'regex': r'analyzed', 'viewset': AnalyzedRestViewSet, 'basename': 'Analyzed'}
]
