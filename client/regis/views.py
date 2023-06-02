from django.shortcuts import render
from hashlib import sha256
# Create your views here.
from rest_framework import generics
from .models import Users
from .serializers import UserSerializer

class UserList(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'email'

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'email'
