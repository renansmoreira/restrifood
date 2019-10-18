from django.db import models

class Fornecedor(models.Model):
    nome = models.CharField(max_length=200)
    horarios_de_atendimento = models.CharField(max_length=1000)
    logo = models.CharField(max_length=5000)
    telefone = models.CharField(max_length=15)
    email = models.CharField(max_length=150)

    @classmethod
    def criar(self, **kwargs):
        dados = {
            'nome': kwargs.get('nome'),
            'telefone': kwargs.get('telefone'),
            'email': kwargs.get('email'),
            'logo': kwargs.get('logo'),
            'horarios_de_atendimento': kwargs.get('horarios_de_atendimento'),
        }

        return self(**dados)

class Produto(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.CharField(max_length=5000)
    foto = models.CharField(max_length=5000)
    ingredientes = models.CharField(max_length=7000)
    tabela_nutricional = models.CharField(max_length=7000)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)
    preco = models.CharField(max_length=100, null=True)
    patologias = models.CharField(max_length=500, null=True)