# get docker image
FROM python:3.7
ENV PYTHONUNBUFFERED=1

# Copy Application files to the image 
COPY . ./

RUN pip3 install -r requirements
# RUN pip3 install isla-1.8.3-py3-none-any.whl
# RUN python manage.py migrate

EXPOSE 8000

CMD python manage.py runserver 0.0.0.0:8000 

