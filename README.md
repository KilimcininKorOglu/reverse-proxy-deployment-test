# reverse-proxy-deployment-test

A minimal Node.js app for testing [r3v3rs3](https://github.com/KilimcininKorOglu/r3v3rs3) deployments. It serves `Hello World` on port 3000.

## Run

```bash
docker build -t reverse-proxy-deployment-test .
docker run -p 3000:3000 reverse-proxy-deployment-test
```
