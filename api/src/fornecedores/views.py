from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class FornecedoresView(APIView):
    def get(self, request, format=None):
        return Response({ 'success': True, 'data': 'oi' })