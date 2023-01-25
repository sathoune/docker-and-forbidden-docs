export const compose = `# This project's compose
services:
  app:
   build:
      context: .
      target: development
    command: yarn run dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    depends_on:
      app-init:
        condition: service_completed_successfully

  app-init:
    build:
      context: .
      target: development
    command: yarn
    volumes:
      - .:/app
`;
