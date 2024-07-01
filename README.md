# Solution

## Technologies used
1. npm - for managing dependencies
2. TypeScript - for type safety, readability and code completion
3. Express.js - for easily spinning up a local server
4. Jest (ts-jest) - for writing and executing tests
5. OpenAPI - for documenting the API contract - this can also be imported into postman for testing

## How to run the server
1. Open terminal
2. Run ```nvm use``` command
3. Run ```npm install``` command
4. Run ```npm run start``` command (this pre-compiles all the typescript files and then starts the server)

## How to run the tests
1. Open terminal
2. Run ```npm run test``` command

## Other available commands
1. ```npm run build``` - to compile the typescript files
2. ```npm run clean``` - to remove the transpiled files (dist folder)

# Tech test

Thanks for your interest in joining our team! This is a quick little test which is an example of the sort of work we do here at huggg.

## Intro

We have some complex, legacy API functionality and data structures which can be awkward for our API clients and front end applications to consume. This task is to rig up some functionality for our clients.

## Specification

You have a service which returns all relevant information for our brands, which can potentially be a very large amount of information. Occassionally this information is useful (e.g. a mobile app may fetch early and cache) but for most use-cases it is too much to handle at once. Your task is to provide endpoints to access discrete pieces of information at once via HTTP GET endpoints. These should include:

- Get brand by brand-id
- Get all products for brand by brand-id
- Get all stores for a brand by brand-id
- Get all stores for a product by product-id

The format of the data your service should return is JSON. You should make a mock service which returns this.

## Top Tips

- Some of our brands and products are "consolidated" which means the product is available at multiple brands + stores. So a single product may belong to multiple brands, as well as its "true" parent. When returning a brand's products, these consolidated products should also be returned.

## What we are looking for

- We're really looking to see your best work here so make sure you take some time to solve this and put your best foot forward! If time is tight, we'd rather see one "finished" endpoint than 4 partially complete ones.
- Time taken to fully understand the data and the problem
- A demonstration of automated testing
- Have considered performance, this test data set is small but the service should be built with the assumption that this dataset is much larger so preferably no O(n^4) functions
- TypeScript usage
- Good code structure

## How we do this at Huggg

At Huggg we use TypeScript, Fastify, Typebox, Jest, Docker and others to build our services so feel free to use those technologies if you like but we're happy for you to approach this with whatever you are comfortable with.
