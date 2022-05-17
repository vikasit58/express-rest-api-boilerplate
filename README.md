# express -rest-api-boiler-plate
#### To start setting up the project

Step 1: Clone the repo

```bash
https://github.com/vikasit58/express-rest-api-boilerplate.git
```
Step 2: Switch to root directory
```bash
cd express-rest-api
``` 
Step 3:  Copy .env file to root
```bash
 express-rest-api/.env
``` 
Step 4: create your mongdb account from https://cloud.mongodb.com/account (If already have a account then no need to create new one you can skip this step)
```bash
 - create your free shared cluster
 - create a new db 
 - whitelist your ip
 - copy the connection url like mongodb+srv://USER_NAME:YOUR_PASSWORD@cluster0.ixwtx.mongodb.net/YOUR_DB_NAME?retryWrites=true&w=majority
 - update MONGODB_URL variable with your above mongodb connection url
 ```
Step 5: Update MSSQL credentials in .env file
```bash
    DB_USER= YOUR_STAGE_DB_USER_NAME
    DB_PASS= YOUR_STAGE_DB_USER_PASSWORD
```
#### Run application with docker

Step 6: Install docker on your machine (already have then SKIP this step)

Step 7: create build from root directory
 ```bash
 docker build –t express-rest-api .
```

 Step 8: Start docker container
  ```bash
    docker-compose up
 ```
 Step 9: Run redis server inside docker container
        Open new cmd or terminal window and enter below command
```bash
    docker exec -it express-rest-api /bin/bash
```
     type redis-server 
    
```bash
     redis-server
```

Step 10: Test your api on postman
```bash
    http://localhost:3002/login
```
```bash
    Post data: 
    {
        "email" : "EMAIL_ID",
        "password" : "PASSWORD"
    }    
```
```bash
....................YOU are DONE.....................
```

## PACKAGES

- **Databases**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com) & [MSSQL]{https://www.microsoft.com/en-in/sql-server/sql-server-2019}  object data modeling using [Sequelize](https://sequelize.org/)
- **Authentication and authorization**: using [JWT](https://jwt.io/)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston)
- **Caching**: using [redis](https://redis.io/)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [npm](https://www.npmjs.com/)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Docker support**