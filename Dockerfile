FROM node:16-alpine
COPY --chown=1000:1000 . /app/
WORKDIR /app/
USER 1000
RUN npm ci
RUN npm run build

ENV DGNOTIFY=0.0.0.0
ENTRYPOINT ["/usr/local/bin/node", "/app/dgn_relay.cjs"]

