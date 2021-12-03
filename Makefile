all: test

build-dev:
	docker build --network host -t nodejs-vue:latest -f Dockerfile.dev .
build:
	docker build --network host -t vuejs-app:latest .
run: build
	docker rm vuejs-app -f
	docker run -d -t -i --network host --name vuejs-app vuejs-app
test:
	npm install
	npm run build
	npm run dev
