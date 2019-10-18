from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from fornecedores.models import Fornecedor, Produto

class FornecedoresView(APIView):
    def get(self, request, format=None):
        id = request.query_params.get('id')

        if id:
            fornecedor = Fornecedor.objects.get(pk=1)
            dados = {
                'id': fornecedor.pk,
                'nome': fornecedor.nome,
                'telefone': fornecedor.telefone,
                'email': fornecedor.email,
                'logo': fornecedor.logo,
                'horariosDeAtendimento': fornecedor.horarios_de_atendimento
            }
        else:
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

    def delete(self, request, format=None):
        id = request.query_params.get('id')

        Fornecedor.objects.get(pk=id).delete()

        return Response({ 'sucesso': True })

class ProdutosView(APIView):
    def get(self, request, format=None):
        id_do_fornecedor = request.query_params.get('id')
        produtos = Produto.objects.filter(fornecedor__pk=id_do_fornecedor) if id_do_fornecedor \
            else Produto.objects.all()

        dados = list(map(lambda produto: {
            'id': produto.pk,
            'nome': produto.nome,
            'descricao': produto.descricao,
            'foto': produto.foto,
            'ingredientes': produto.ingredientes,
            'tabelaNutricional': produto.tabela_nutricional,
            'preco': produto.preco,
            'patologias': produto.patologias.split(',') if produto.patologias else [],
        }, produtos))

        return Response({ 'sucesso': True, 'data': dados })

    def post(self, request, format=None):
        dados = {
            'nome': request.data.get('nome'),
            'descricao': request.data.get('descricao'),
            'foto': request.data.get('foto'),
            'ingredientes': request.data.get('ingredientes'),
            'tabela_nutricional': request.data.get('tabelaNutricional'),
            'fornecedor': Fornecedor.objects.get(pk=request.data.get('fornecedorId')),
            'preco': request.data.get('preco'),
            'patologias': request.data.get('patologias'),
        }

        novo_produto = Produto.objects.create(**dados)
        novo_produto.save()

        return Response({ 'sucesso': True })

    def delete(self, request, format=None):
        id = request.query_params.get('id')

        Produto.objects.get(pk=id).delete()

        return Response({ 'sucesso': True })