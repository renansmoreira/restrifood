from django.db import models
import enum

class Cliente(models.Model):
    nome = models.CharField(max_length=500)
    telefone = models.CharField(max_length=15)
    email = models.CharField(max_length=150)
    senha = models.CharField(max_length=100)
    patologias = models.CharField(max_length=500, null=True)

    @classmethod
    def criar(self, **kwargs):
        nome = kwargs.get('nome')
        telefone = kwargs.get('telefone')
        email = kwargs.get('email')
        senha = kwargs.get('senha')
        confirmacao_de_senha = kwargs.get('confirmacao_de_senha')

        if not nome:
            raise Exception('O seu nome deve ser informado')

        if not telefone:
            raise Exception('O seu telefone deve ser informado')

        if not email:
            raise Exception('O seu email deve ser informado')

        if not senha:
            raise Exception('A sua senha deve ser informada')

        if not confirmacao_de_senha:
            raise Exception('A confirmação da sua senha deve ser informada')

        if senha != confirmacao_de_senha:
            raise Exception('As senhas digitadas não são iguais')

        return self(nome=nome, telefone=telefone, email=email, senha=senha)

    def obter_patologias(self):
        if not self.patologias:
            return []

        return self.patologias.split(',')

    def adicionar_patologias(self, patologias):
        separador = ','
        self.patologias = separador.join(patologias)

class Patologia(enum.Enum):
    RENAL_CRONICA = 'Renal crônica'
    DIABETES = 'Diabetes'
    HIPERTENSAO = 'Hipertensão'
    INTOLERANCIA_A_GLUTEN = 'Intolerância a glúten'
    INTOLERANCIA_A_LACTOSE = 'Intolerancia a lactose'
    GASTRITE = 'Gastrite'
    CALCULO_RENAL = 'Cálculo renal'
    OBESIDADE = 'Obesidade'