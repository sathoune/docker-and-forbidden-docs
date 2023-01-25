export const appendBase = `# Base
services:
  app:
  command: yarn run dev
  ports: 
    - "3000:3000"
  volumes:
    - .:/app`;

export const appendExtension = `# Override
services:
  app:
    ports:
      - "80:3000"
    volumes:
      - /app/node_modules`;

export const appendResult = `# Result
services:
  app:
  command: yarn run dev
  ports: 
    - "3000:3000"
    - "80:3000"
  volumes:
    - .:/app
    - /app/node_modules`;
