# SPDX-License-Identifier: Apache-2.0 

# stage1 as builder
FROM node:18-alpine as builder

WORKDIR /vue-ui

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the files
COPY . .

# Build the project
RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine as production-build

# Copy from the stahg 1
COPY --from=builder /vue-ui/dist /usr/share/nginx/html

EXPOSE 8080
ENTRYPOINT ["nginx", "-e", "/dev/stdout", "-g", "daemon off;"]
