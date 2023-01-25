export const thisBase = `# This project
services:
  app:
    build:
      context: .
      target: development`;

export const thisExtension = `# This project override
services:
app:
  command: yarn run dev
  ports:
    - "3000:3000"
  volumes:
    - .:/app`;

export const thisResult = `# Together they create
services:
app:
  build:
      context: .
      target: development
  command: yarn run dev
  ports:
    - "3000:3000"
  volumes:
    - .:/app`;
