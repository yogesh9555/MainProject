from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request,'MainApp/index.html')
def about(request):
    return render(request,'MainApp/about.html')
def services(request):
    return render(request,'MainApp/services.html')
def contact(request):
    return render(request,'MainApp/contact.html')