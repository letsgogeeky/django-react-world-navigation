FROM python:3.7

LABEL Author="Ramy"

WORKDIR /app/backend

COPY requirements.txt /app/backend

RUN pip3 install --upgrade pip -r requirements.txt

COPY . /app/backend

EXPOSE 8000


# RUN python manage.py migrate worldapp 0001 --fake

#RUN python manage.py migrate

# RUN chmod +x ./wait-pg.sh

# Run the app

CMD python3 manage.py runserver 0.0.0.0:8000
