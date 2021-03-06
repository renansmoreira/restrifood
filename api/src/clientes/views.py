from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from clientes.models import Cliente

class ClientesView(APIView):
    def get(self, request, format=None):
        dados = list(map(lambda cliente: {
            'id': cliente.pk,
            'nome': cliente.nome,
            'telefone': cliente.telefone,
            'email': cliente.email,
            'patologias': cliente.obter_patologias(),
        }, Cliente.objects.all()))

        return Response({ 'sucesso': True, 'data': dados })

    def post(self, request, format=None):
        dados = {
            'nome': request.data.get('nome'),
            'telefone': request.data.get('telefone'),
            'email': request.data.get('email'),
            'senha': request.data.get('senha'),
            'confirmacao_de_senha': request.data.get('confirmacaoDeSenha'),
            'patologias': request.data.get('patologias'),
        }

        novo_cliente = Cliente.criar(**dados)
        novo_cliente.adicionar_patologias(dados['patologias'])
        novo_cliente.save()

        return Response({ 'sucesso': True })

    def delete(self, request, format=None):
        id = request.query_params.get('id')

        Cliente.objects.get(pk=id).delete()

        return Response({ 'sucesso': True })