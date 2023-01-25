export const short = `services:
  app:
    volumes:
      - ./client:/app
      - ./node_modules:/app/node_modules`;

export const extended = `services:
  app:
    volumes:
    - type: bind
      source: ABSOLUTE_PATH_TO_PROJECT/client
      target: /app
      bind:
        create_host_path: true    
    - type: bind
      source: ABSOLUTE_PATH_TO_PROJECT/node_modules
      target: /app
      bind:
        create_host_path: true`;
