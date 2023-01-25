export const thisProject = `# This project
default: down
\tdocker compose up -d

down:
\tdocker compose down --remove-orphans

prod:
\tdocker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d`;
