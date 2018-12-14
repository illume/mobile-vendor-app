FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD backend/ /code/
RUN pip install -r requirements.txt
