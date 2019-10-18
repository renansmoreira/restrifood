# FROM python:3
FROM heroku/heroku:16
ENV LC_ALL C.UTF-8
ENV LANG C.UTF-8
ENV PYTHONUNBUFFERED 1
ENV DATABASE_URL $DATABASE_URL
ENV ENV_NAME $ENV_NAME

RUN apt update
RUN apt install openssh-server curl python3 python3-pip python-psycopg2 -y

RUN mkdir /app
RUN mkdir /src

COPY ./heroku-exec.sh /app
COPY ./src /src

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

WORKDIR /src
RUN pip3 install pipenv
RUN pipenv install --system --deploy

CMD bash /app/heroku-exec.sh && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:$PORT