all: run

build:
	docker build -t vuejs-app:latest .
run: build
	docker rm vuejs-app -f
	docker run -d -t -i --network host --name vuejs-app vuejs-app 
test:
	npm run serve
