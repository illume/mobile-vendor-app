from rest_framework import viewsets, permissions

from .models import Vendor
from .serializers import VendorSerializer


class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = VendorSerializer
