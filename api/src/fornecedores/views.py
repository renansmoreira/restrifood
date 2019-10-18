from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from fornecedores.models import Fornecedor

class FornecedoresView(APIView):
    def get(self, request, format=None):
        dados = list(map(lambda fornecedor: {
            'id': fornecedor.pk,
            'nome': fornecedor.nome,
            'telefone': fornecedor.telefone,
            'email': fornecedor.email,
            'logo': fornecedor.logo,
            'horariosDeAtendimento': fornecedor.horarios_de_atendimento
        }, Fornecedor.objects.all()))

        return Response({ 'sucesso': True, 'data': dados })

    def post(self, request, format=None):
        dados = {
            'nome': request.data.get('nome'),
            'telefone': request.data.get('telefone'),
            'email': request.data.get('email'),
            'logo': request.data.get('logo'),
            'horarios_de_atendimento': request.data.get('horariosDeAtendimento'),
        }

        novo_fornecedor = Fornecedor.criar(**dados)
        novo_fornecedor.save()

        return Response({ 'sucesso': True })