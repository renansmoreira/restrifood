from django.db import models

class Fornecedor(models.Model):
    nome = models.CharField(max_length=200)
    horarios_de_atendimento = models.CharField(max_length=1000)
    logo = models.CharField(max_length=300)
    telefone = models.CharField(max_length=15)
    email = models.CharField(max_length=150)

class Produto(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.CharField(max_length=5000)
    foto = models.CharField(max_length=300)
    ingredientes = models.CharField(max_length=7000)
    tabela_nutricional = models.CharField(max_length=7000)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)