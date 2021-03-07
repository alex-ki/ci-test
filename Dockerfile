FROM node:12-buster

RUN export DEBIAN_FRONTEND=noninteractive \
  && apt-get update \
  && apt-get install -yq --no-install-recommends chromium \
  && apt-get -y autoremove \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /root

ADD . ./
RUN npm install

EXPOSE 9515