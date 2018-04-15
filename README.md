# Docker deployment tools

This is a collection of tools and scripts to help with deploying docker projects.

## Exoframe

Exoframe is a self-hosted platform like Now.sh and the like.

Example deploy of a docker-compose project is as simple as:

	exoframe deploy

Then exoframe takes care of the rest!

It is using Traefik as a reverse-proxy to route domains to containers.
