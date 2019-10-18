from django.urls import include, path
from rest_framework import routers
from fornecedores.views import FornecedoresView, ProdutosView
from clientes.views import ClientesView

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('fornecedores/', FornecedoresView.as_view()),
    path('clientes/', ClientesView.as_view()),
    path('clientes/', ClientesView.as_view()),
    path('produtos/', ProdutosView.as_view()),
]
