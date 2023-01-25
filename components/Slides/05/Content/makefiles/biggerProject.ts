export const biggerProject = `default: down
\tdocker compose up -d

down:
\tdocker compose down --remove-orphans

test:
\tdocker compose -f docker-compose.yaml -f docker-compose.test.yaml run server pytest

lint:
\tdocker compose run server flake8

prod:
\tdocker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d

scan:
\tdocker compose --profile=scan -f docker-compose.yaml -f docker-compose.prod.yaml up -d

push:
\t docker push \${DOCKER_REPOSITORY}/my-server:latest`;
