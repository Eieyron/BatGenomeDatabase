#!/bin/bash

# script to run docker images

docker kill $(docker ps -q) # kills all running containers
docker system prune -a -f# deletes all stopped containers and images

docker pull avmagnaye/batgenomedatabase:latest

docker run -p 0.0.0.0:8000:8000 -d "avmagnaye/batgenomedatabase"