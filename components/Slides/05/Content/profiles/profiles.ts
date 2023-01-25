export const profiles = `services:
  app:
    command: yarn run dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app

  server:
    image: python:3.9-alpine
    profiles:
      - dev
    tty: true

  testing:
    image: cypress/base:latest
    profiles:
      - test
    tty: true
`;
