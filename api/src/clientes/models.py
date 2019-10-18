from django.db import models

class Cliente(models.Model):
    nome = models.CharField(max_length=500)
    telefone = models.CharField(max_length=15)
    email = models.CharField(max_length=150)
    senha = models.CharField(max_length=100)

    @classmethod
    def criar(self, **kwargs):
        nome = kwargs.get('nome')
        telefone = kwargs.get('telefone')
        email = kwargs.get('email')
        senha = kwargs.get('senha')
        confirmacao_de_senha = kwargs.get('confirmacao_de_senha')

        if senha != confirmacao_de_senha:
            raise Exception('As senhas digitadas não são iguais')

        return self(nome=nome, telefone=telefone, email=email, senha=senha)