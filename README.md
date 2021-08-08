# stock-info

```
docker build . \
    -t stock-info:latest \
    --build-arg NEXT_PUBLIC_BASE_URL=http://localhost:8080
docker container run --rm -it -p 8080:8080 stock-info:latest
```
