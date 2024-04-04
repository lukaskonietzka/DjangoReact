from django.db import models


class GreenAssistantDB(models.Model):
    prompt = models.CharField(unique=True, max_length=1000)
    answer = models.CharField(unique=True, max_length=1000)

    def __str__(self):
        return self.prompt
