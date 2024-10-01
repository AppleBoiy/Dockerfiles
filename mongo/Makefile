IMAGE_NAME=mongoim
CONTAINER_NAME=mongoc
MONGO_PORT=27017
MONGO_ADMIN_USER=admin
MONGO_ADMIN_PASSWORD=password123
MONGO_DATABASE=mongodb

all: build run

compose-up:
	docker-compose up --build -d


build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -d -p $(MONGO_PORT):27017 --name $(CONTAINER_NAME) $(IMAGE_NAME) --auth

stop:
	docker stop $(CONTAINER_NAME)

remove:
	docker rm $(CONTAINER_NAME)

clean: stop remove

connect:
	docker exec -it $(CONTAINER_NAME) mongosh --username $(MONGO_ADMIN_USER) --password $(MONGO_ADMIN_PASSWORD) --authenticationDatabase $(MONGO_DATABASE)

rebuild: clean build run

test:
	docker exec $(CONTAINER_NAME) mongosh --eval "db.adminCommand('ping')" --username $(MONGO_ADMIN_USER) --password $(MONGO_ADMIN_PASSWORD) --authenticationDatabase $(MONGO_DATABASE)


.PHONY: build run stop remove clean connect rebuild
