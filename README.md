# filmovie

Hello! This is a quick project made as a job application.

Here are some technologies that I used:

- Javascript with React, for the front-end
- Python with Flask, for the back-end
- flask-smorest, to build the API and for a Swagger interface
- Docker, to create a container for the back-end
- PostgreSQL, as the RDBMS
- SQLAlchemy, to act as an ORM

## Instructions for running the front-end

```sh
cd frontend/
npm install
npm start
```

After that you can browse the landing page at:
> http://localhost:3000

## Instructions for running the back-end

Build the back-end image:
```sh
cd backend/src
docker build -t filmovie-backend .
```

Instantiate a Docker Network of the back-end and a PostgreSQL database:
```sh
cd ..
docker-compose up
```

If you want to wipe the database data inside the container, run:
```sh
sudo rm -rf postgres-data/
```

After that, the back-end can be used at:
> http://localhost:5000/

And the Swagger interface at:
> http://localhost:5000/swagger-ui