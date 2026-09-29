from django.db import models

# Create your models here.
class Skills(models.Model):

    CATEGORY_CHOICES = [
        ("programming", "Programming"),
        ("backend", "Backend"),
        ("ai_cv", "AI / Computer Vision"),
        ("tools", "Tools"),
    ]

    name = models.CharField(max_length=100)

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES
    )

    def __str__(self):
        return self.name


class Projects(models.Model):

    title = models.CharField(max_length=200)

    description = models.TextField()

    technologies = models.TextField(
        help_text="Separate technologies with commas"
    )

    github_url = models.URLField(
        blank=True,
        null=True
    )

    project_url = models.URLField(
        blank=True,
        null=True
    )

    def __str__(self):
        return self.title


class Experience(models.Model):

    job_title = models.CharField(max_length=200)

    company = models.CharField(max_length=200)

    department = models.CharField(
        max_length=200,
        blank=True
    )

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    description = models.TextField()

    def __str__(self):
        return f"{self.job_title} - {self.company}"

class Education(models.Model):

    degree = models.CharField(max_length=200)

    field = models.CharField(max_length=200)

    university = models.CharField(max_length=200)

    start_year = models.PositiveIntegerField()

    end_year = models.PositiveIntegerField(
        blank=True,
        null=True
    )

    description = models.TextField(
        blank=True
    )

    def __str__(self):
        return f"{self.degree} - {self.university}"
