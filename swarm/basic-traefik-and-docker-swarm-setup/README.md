# Docker swarm and traefik setup

## Pre

Install docker etc

## Traefik

Create a directory `traefik` in your home dir.

	mkdir ~/traefik

And create a `traefik.toml` and a `traefik.yml` and copy in the contents, or clone repo.

Create network

	docker network create --driver=overlay traefik

Deploy traefik

	docker stack deploy --compose-file traefik.yml --with-registry-auth traefik

## Deploy first service

Login to registry. Register at [Docker Hub](https://hub.docker.com) if not done already.

	docker login

Build image

	docker build -t youruser/express_test .

Push to registry

	docker push youruser/express_api:latest

Deploy on manager with

	docker stack deploy --compose-file docker-compose.yml --with-registry-auth webapp

## Traefik Dashboard and api

With the config used here the dashboards lives at http://traefik.yourdomain.xyz:8080/dashboard and the api at http://traefik.yourdomain.xyz:8080/api

The dashboard has basic auth with the username: test password: test

## General usage

List docker services

	docker service ls

Remove service

	docker service rm NAME

List docker configs

	docker config ls

Delete docker config

	docker config rm HASHID


