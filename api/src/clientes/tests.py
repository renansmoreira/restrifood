from django.test import TestCase
from clientes.models import Cliente

class ClienteTest(TestCase):
    def setUp(self):
        self.nome = 'Renan'
        self.telefone = '99999-1234'
        self.email = 'email@email.com'
        self.senha = 'senha123'
        self.senha_diferente = 'senha diferente'

    def test_deve_validar_se_a_confirmacao_de_senha_esta_correta_na_criacao(self):
        try:
            Cliente.criar(nome=self.nome, telefone=self.telefone, email=self.email,
                senha=self.senha, confirmacao_de_senha=self.senha_diferente)
        except Exception as exception:
            self.assertEqual('As senhas digitadas não são iguais', str(exception))
            return

        self.fail('Exceção esperada, mas nenhuma lançada')

    def test_nao_deve_criar_sem_nome(self):
        try:
            Cliente.criar(telefone=self.telefone, email=self.email,
                senha=self.senha, confirmacao_de_senha=self.senha)
        except Exception as exception:
            self.assertEqual('O seu nome deve ser informado', str(exception))
            return

        self.fail('Exceção esperada, mas nenhuma lançada')

    def test_nao_deve_criar_telefone(self):
        try:
            Cliente.criar(nome=self.nome, email=self.email,
                senha=self.senha, confirmacao_de_senha=self.senha)
        except Exception as exception:
            self.assertEqual('O seu telefone deve ser informado', str(exception))
            return

        self.fail('Exceção esperada, mas nenhuma lançada')

    def test_nao_deve_criar_sem_email(self):
        try:
            Cliente.criar(nome=self.nome, telefone=self.telefone,
                senha=self.senha, confirmacao_de_senha=self.senha)
        except Exception as exception:
            self.assertEqual('O seu email deve ser informado', str(exception))
            return

        self.fail('Exceção esperada, mas nenhuma lançada')

    def test_nao_deve_criar_sem_senha(self):
        try:
            Cliente.criar(nome=self.nome, telefone=self.telefone, email=self.email,
                confirmacao_de_senha=self.senha)
        except Exception as exception:
            self.assertEqual('A sua senha deve ser informada', str(exception))
            return

        self.fail('Exceção esperada, mas nenhuma lançada')

    def test_nao_deve_criar_sem_a_confirmacao_de_senha(self):
        try:
            Cliente.criar(nome=self.nome, telefone=self.telefone, email=self.email,
                senha=self.senha)
        except Exception as exception:
            self.assertEqual('A confirmação da sua senha deve ser informada', str(exception))
            return

        self.fail('Exceção esperada, mas nenhuma lançada')