# Forex Back-End Repository

## What is a back-end?
A back-end is usually a server which makes the connection with the database, API generation, and more complex "server" operations.

## What this repository does?
 This repository contains the Forex Back-End Server, which are required for running the entire application.
 The server provides all the data needed from the database (past trades), besides making POST requisitions to the database and (TODO) the Queye system.
 
 ## How do I run it?
 You can run it with (TODO) docker and with yarn.
 Be aware that you **MUST** have a PostgreSQL application running (with docker or not), so you can fill the .env file with the database variables.
 
 ### Using Docker (TODO):
> docker run -p 9000:9000 image_id
 
 alternatively, you can use yarn
> yarn install
 and then:
> yarn dev



 ### Testing:
 The tests are made with **Jest**. You can test it with:
 > jest server.test.ts

 to see the test coverage:
 > jest server.test.ts --coverage
 
 
### .Env file configuration:
Once done, you need to fill the configuration in the .env file.
Make sure to stick with the following pattern:
```
DB_NAME='trades'
DB_USER='postgres'
DB_PASS='yourpassword'
 ```
 The default host is localhost. You can change this in the `db.ts` file.
