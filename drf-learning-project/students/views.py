from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def students(request):
  student = [
    {
      "id": 234507301,
      "name": "John",
      "age": 20,
      "city": "Patna"
    },
    {
      "id": 234507302,
      "name": "Jane",
      "age": 21,
      "city": "Delhi"
    },
    {
      "id": 234507303,
      "name": "Bob",
      "age": 22,
      "city": "Hyderabad"
    }
  ]
  return HttpResponse(student)