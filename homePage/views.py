from django.shortcuts import render
from .models import Skills,Projects , Experience, Education


# Create your views here.


def home(request):
    skills = Skills.objects.all()
    projects = Projects.objects.all()
    experience = Experience.objects.all()
    education = Education.objects.all()

    return render(
        request,
        "home.html",
        {
            "skills": skills,
            "projects": projects,
            "experience": experience,
            "education": education
        }
    )