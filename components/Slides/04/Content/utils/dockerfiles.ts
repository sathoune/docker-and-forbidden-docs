export const node = `# node.js/frontend app
FROM node:18
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
CMD ["yarn", "start"]`;

export const python = `# python/backend app
FROM python:3.9
WORKDIR /app
  
COPY requirements.txt ./
RUN pip install -r requirements.txt
  
COPY . .
CMD ["python", "app.py"]`;

export const pythonPoetry = `# from https://github.com/sathoune/python-poetry-docker-template
FROM python:3.11-slim

WORKDIR app

RUN apt-get update
RUN apt install curl -y

ENV \\
  PYTHONFAULTHANDLER=1 \\
  PYTHONUNBUFFERED=1 \\
  PIP_NO_CACHE_DIR=off \\
  PIP_DEFAULT_TIMEOUT=100 \\
  POETRY_HOME=/py-poetry \\
  POETRY_VIRTUALENVS_CREATE=0 \\
  POETRY_VERSION=1.3.2


RUN curl -sSL https://install.python-poetry.org/ | python
ENV PATH="\${POETRY_HOME}/bin:$PATH"

COPY pyproject.toml poetry.lock ./
RUN poetry install

COPY . .`;

export const thisProject = `# this presentation
FROM --platform=linux/amd64 node:18-alpine as development
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
CMD ["yarn", "dev"]

FROM development as production
RUN yarn build

CMD ["yarn", "start"]`;

export const multistageNode = `# SPA with node.js
FROM node:18-alpine as dev
WORKDIR app

COPY ./package.json ./yarn.lock ./
RUN yarn

COPY . .

FROM dev as build
RUN yarn build

FROM nginx:latest as prod
COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d`;
