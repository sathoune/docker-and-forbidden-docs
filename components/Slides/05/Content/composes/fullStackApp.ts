export const fullStackApp = `# Full Stack App
services:
  db:
    image: postgres:14
    volumes:
      - app-db-data:/var/lib/postgresql/data/db
  redis:
    image: redis:6

  client:
    build:
      context: client
    command: yarn start
    ports:
      - "3000:3000"

  server:
    env_file:
      - ./server/.env
    build:
      context: server
    command: bash -c "alembic upgrade head && python -m app.start"
    ports:
      - "8000:8000"
      
    depends_on:
      - db
      - redis

volumes:
  app-db-data:
`;
