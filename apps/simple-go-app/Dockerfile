FROM golang

WORKDIR /app

ADD . /app/

EXPOSE 8080

RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-gs-ping

CMD ["/docker-gs-ping"]