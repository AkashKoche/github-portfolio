# syntax=docker/dockerfile:1

#---- Base Stage ----
FROM node:20-alpine3.23 AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

#---- Test Stage ----
FROM base AS test
COPY . .
RUN npm test

#---- Security Audit ----
FROM base AS npm-audit
COPY . .
RUN npm audit --audit-level=critical

#---- Dependency Vulnerability Scan (Snyk) ----
FROM base AS snyk-scan
COPY . .
ARG SNYK_TOKEN
RUN npm install -g snyk --foreground-scripts
RUN if [ -n "$SNYK_TOKEN" ]; then \
      snyk auth "$SNYK_TOKEN" && snyk test --all-projects || true; \
    else \
      echo "SNYK_TOKEN not provided, skipping Snyk scan"; \
    fi

#---- Build Stage ----
FROM base AS builder
RUN apk update && upgrade --no-cache
COPY . .
ARG VITE_GITHUB_TOKEN
ENV VITE_GITHUB_TOKEN=$VITE_GITHUB_TOKEN
RUN npm run build

#---- Production Image ----
FROM nginx:alpine
# Upgrade Alpine packages to patch CVE-2026-34182 (OpenSSL vulnerability)
RUN apk update && apk upgrade --no-cache openssl

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
