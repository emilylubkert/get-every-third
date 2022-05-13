# Technical Sample
## Lyft Software Engineering Apprenticeship application

### Description
This is a simple web application that accepts a POST request to the route "/test" with one argument "string_to_cut". This request returns a JSON object with the key “return_string” and a string containing every third letter from the original string.

### How to Run
- Try out:    
    `curl -X POST https://get-every-third-server.herokuapp.com/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json' ` <br/>
    Expect to see `{"return_string":"muydv"}` <br/>

- To test:
- Clone this repo `git clone https://github.com/emilylubkert/get-every-third.git`
  - `npm install`
  - `npm test` to run unit tests

To see a version of this app with a front end, visit https://frontend-lyft.herokuapp.com/. <br/>
The repo for that code is https://github.com/emilylubkert/lyft-application-with-frontend

### API
#### POST /test  
- Parameter: string_to_cut, the string that we want to get every 3rd character from  
- In body: `{"string_to_cut" : "anyStringHere"}`; must be a string with at least 3 characters
- Content-Type: application/json <br/>
- Valid response: `{"return_string": "..."}` with string containing every 3rd character from original string
- Server response for invalid requests: Status code 400 with the following error message
  - Request is too short: 'Initial string must be at least 3 characters'
  - Request is not a string: 'Check string and try again'
  - Request body is empty, or undefined: 'Cannot read properties of undefined (reading 'length')'
  - Request is null: 'Cannot read properties of null (reading 'length')'
  

### Contact
elubkert@gmail.com

### License
MIT
