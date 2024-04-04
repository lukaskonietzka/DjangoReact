from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, response
from .models import GreenAssistantDB
from rest_framework.response import Response
from .serializers import GreenAssistantSerializer


class GreenAssistantViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    queryset = GreenAssistantDB.objects.all()
    serializer_class = GreenAssistantSerializer

    def getAllObjects(self):
        self.queryset = GreenAssistantDB.objects.all()

    def list(self, request):
        self.getAllObjects()
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project)
        return Response(serializer.data)

    def update(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        project.delete()
        return Response(status=204)
