
## People on the move.

MobVend - React Native app folder
backend - Django python app folder


Once you have docker compose, you can run the backendapp like this.

```
docker-compose up
```


### DB Migrations.

Using the standard Django manage tool...

```
docker-compose run web python /code/backend/manage.py migrate --noinput
```
