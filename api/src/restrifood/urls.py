from django.urls import include, path
from rest_framework import routers
from fornecedores.views import FornecedoresView
from clientes.views import ClientesView

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('fornecedores/', FornecedoresView.as_view()),
    path('clientes/', ClientesView.as_view()),
]
