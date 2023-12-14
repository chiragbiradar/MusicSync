from django.shortcuts import render
from rest_framework import generics

# Create your views here.
def RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer