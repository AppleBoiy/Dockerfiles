IMAGE_NAME=postgresim
CONTAINER_NAME=postgresc
POSTGRES_PORT=5432

all: build run

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -d --name $(CONTAINER_NAME) -p $(POSTGRES_PORT):5432 $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

clean:
	docker rmi $(IMAGE_NAME)

ps:
	docker ps -a

test:
	docker exec -it $(CONTAINER_NAME) psql -U user -d postgresdb -c "SELECT 1;"

compose-up:
	docker-compose up --build -d
