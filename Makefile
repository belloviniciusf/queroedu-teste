init:
	docker-compose up -d

migrations:
	yarn sequelize db:migrate

seeds:
	yarn sequelize db:seed:all

reset:
	yarn sequelize db:migrate:undo:all

down:
	docker-compose down

bash:
	docker exec -it dbquero bash

logs:
	docker logs dbquero
