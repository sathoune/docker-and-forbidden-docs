export const overrideBase = `# Base
services:
  app:
    build:
      context: .
      target: development
  command: yarn run dev
  ports: 
    - "3000:3000"`;

export const overrideExtension = `# Override
services:
  app:
    build:
      target: prod
  command: nginx -g 'daemon off;'`;

export const overrideResult = `# Result
services:
  app:
    build:
      context: .
      target: prod
  command: nginx -g 'daemon off;'
  ports: 
    - "3000:3000"`;
