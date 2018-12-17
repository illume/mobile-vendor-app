
## People on the move.


## MobVend React Native App.

#### Quickstart iOS

Install all the dependencies with npm.

```
cd MobVend
npm install
```


Install react native debugger.

```
brew update && brew cask install react-native-debugger
```

Run the app.

```
react-native run-ios
```


## backend, Django python app folder.

#### Quickstart backend.


Once you have docker compose, you can run the backendapp like this.

```
docker-compose up
```


### DB Migrations.

Using the standard Django manage tool...

```
docker-compose run web python /code/backend/manage.py migrate --noinput
```
