# Exoframe docker-compose

## Deploy to exoframe

Add endpoint

	exoframe endpoint https://exoframe.yourdomain.xyz

Login

	exoframe login

Deploy (with verbose log)

	exoframe deploy -vvv

## Local development

Build image

	docker build -t exoframe_express_api .

Run container locally

	docker run -ti -p 3000:3000 exoframe_express_api

Or to run both services with docker-compose add portmappings to `docker-compose.yml`

```diff
version: '3.5'
services:
  exoframe_express_api:
	container_name: exoframe_express_api
	build:
	  context: .
	  dockerfile: Dockerfile
	labels:
	  traefik.frontend.rule: 'Host:express.lndgrn.xyz'
	working_dir: /app
+	ports:
+	  - 3000:3000
	depends_on:
	  - exoframe_database
  exoframe_database:
	container_name: exoframe_postgres_db
	image: postgres:9.6
	volumes:
	  - database:/var/lib/postgresql/data
	ports:
	  - 7772:5432
volumes:
  database:
```
