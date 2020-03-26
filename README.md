# Prometheus world navigation.

It was a much fun building this project.

Docker configuration in this project is meant for development environment, and will not be fully functional in production environment.

### Continents
![Continents](https://github.com/letsgogeeky/django-react-world-navigation/blob/dev/screenshots/continent.png?raw=true)

### Regions
![Regions](https://github.com/letsgogeeky/django-react-world-navigation/blob/dev/screenshots/region.png?raw=true)

## Technologies used

### Python & Django
I used python and django to build the backend service.
For Apis I used `django-restframework`

### PostgreSQL

The database script is run from within `Dockerfile` to initialize base Scheme and Data.

### ReactJs & Redux

For the frontend I used React and `Redux` for state management.
#### Packages
I used some extra packages to help with designing, data visualization, and effecient state management.
- Google Charts
- Semantic UI
- lodash
- React Router
- axios

## Running with Docker Compose
Inside each directory there is a `Dockerfile` for individual build.

```bash
    docker-compose up --build
```

If you want to run your own database on local machine, change database connection settings in `settings.py` to be `'HOST': 'host.docker.internal'`

and run the following scripts:

```bash
python manage.py migrate worldapp 0001 --fake

python manage.py migrate

```

## Notes:
If the backend could not connect to the DB in the first run, edit a single character in the `backend` python code to force rebuild. This happens because Docker is not configured to wait until the Postgre Database is ready to accept connection.