from django.test import TestCase
from clientes.models import Cliente

class ClienteTest(TestCase):

    def test_deve_validar_se_a_confirmacao_de_senha_esta_correta_na_criacao(self):
        try:
            Cliente.criar(nome='Renan', telefone='99999-1234', email='email@email.com',
                senha='senha123', confirmacao_de_senha='senha diferente')
        except Exception as exception:
            self.assertEqual('As senhas digitadas não são iguais', str(exception))
            return

        self.fail('Exceção esperada, mas nenhuma lançada')