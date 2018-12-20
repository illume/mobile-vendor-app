from .base import *  # noqa
from .base import env

DEBUG=True
SECRET_KEY = env('DJANGO_SECRET_KEY', default='x%%=2g0dj&34!%zfg^i+_7z_32d*_n(nrflxmgp2+cy*^67*-l')
# https://docs.djangoproject.com/en/dev/ref/settings/#templates
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG # noqa F405
