export const short = `services:
  app:
    volumes:
      - /app/node_modules
      - db-data:/var/lib/postgresql/data
volumes: 
  db-data:`;

export const extended = `services:
  app:
    volumes:
      - type: volume
        target: /app/node_modules
        volume: {}
      - type: volume
        source: db-data
        target: /app/.next/data
        volume: {}

volumes: 
  db-data:`;
