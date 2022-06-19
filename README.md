# All API documentation

## Clone the project
# Run command
`npm install`

# Go to project directory with command `cd project name` and run command
`npm start`

*  # City Api 

    `http://localhost:8080/api/city`  -> method [Get] get all cities

    `http://localhost:8080/api/city`  -> method [POST] add citie

    `http://localhost:8080/api/city/{id}`  -> method [GET] get one city by id 

    `http://localhost:8080/api/city/{id}`  -> method [DELETE] delete one city by id 

    `http://localhost:8080/api/city/{id`}  -> method [PUT] update one city by id 


* # Package all  api 

    `http://localhost:8080/api/package`  -> method [Get] package all cities

    `http://localhost:8080/api/package`  -> method [POST] add package

    `http://localhost:8080/api/package/{id}`  -> method [GET] get one package by id 

    `http://localhost:8080/api/package/{id}`  -> method [DELETE] delete one package by id 
    
    `http://localhost:8080/api/package/{id}`  -> method [PUT] update one package by id 





    ## Package filter by (title, id, startingPrice, duration, cityName, isActive, isMostPoplar )

    `http://localhost:8080/api/packagefilter?title={title name}&id={id}&` etc   -> method [GET] Fillter  package by search query



## `Technical Documentation` 

 * NodeJS

 * MongoDB
 * Typescript
 * ExpressJS
 * REST