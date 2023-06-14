FROM node:16-alpine as builder

# RUN mkdir -p /napa
WORKDIR /napa
COPY package*.json ./

# COPY next.config.js ./napa/next.config.js
# COPY tsconfig.json ./napa/tsconfig.json

COPY . .

# RUN npm config set unsafe-perm true
# RUN npm install typescript --legacy-peer-deps
# RUN npm install -g ts-node
RUN npm install --legacy-peer-deps

RUN npm run build


EXPOSE 5001

CMD ["npm", "start"]