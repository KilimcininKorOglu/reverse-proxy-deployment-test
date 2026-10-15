# reverse-proxy-deployment-test

A minimal Node.js app for testing [r3v3rs3](https://github.com/KilimcininKorOglu/r3v3rs3) deployments. It serves a `Hello World` page on port 3000 that shows the current time (Europe/Istanbul), the uptime of the running container in year to second units, and a link to the r3v3rs3 repository.

## Run

```bash
docker build -t reverse-proxy-deployment-test .
docker run -p 3000:3000 reverse-proxy-deployment-test
```

## Deployment

A push to `main` triggers the r3v3rs3 deployment webhooks, which build this image and redeploy the app automatically; no manual step is needed.
