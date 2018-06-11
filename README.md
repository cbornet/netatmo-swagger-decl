# Netatmo OpenAPI Specification
[![Build Status](https://travis-ci.org/cbornet/netatmo-swagger-decl.svg?branch=master)](https://travis-ci.org/cbornet/netatmo-swagger-decl)
[![swagger](https://online.swagger.io/validator?url=https://raw.githubusercontent.com/cbornet/netatmo-swagger-decl/master/spec/swagger.yaml)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/cbornet/netatmo-swagger-decl/master/spec/swagger.yaml)

Swagger declaration file for the Netatmo API

Described APIs are :
* Weather station
* Thermostat
* Cameras (Welcome and Presence)
* Enterprise

## Links

- Documentation(ReDoc): https://cbornet.github.io/netatmo-swagger-decl/
- SwaggerUI: https://cbornet.github.io/netatmo-swagger-decl/swagger-ui/
- Look full spec:
    + JSON https://cbornet.github.io/netatmo-swagger-decl/swagger.json
    + YAML https://cbornet.github.io/netatmo-swagger-decl/swagger.yaml
- Preview spec version for branch `[branch]`: https://cbornet.github.io/netatmo-swagger-decl/preview/[branch]

**Warning:** All above links are updated only after Travis CI finishes deployment

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and `cd`
    + Run `npm install`

### Usage

The spec is located in the `spec` directory. You can edit it manually or using a synchronized `swagger-editor` 

1. Run `npm start`
2. Checkout console output to see where local server is started. You can use all [links](#links) (except `preview`) by replacing https://cbornet.github.io/netatmo-swagger-decl/ with url from the message: `Server started <url>`
3. Make changes in the file `spec/swagger.yaml` using your favorite editor or in `swagger-editor` (look for URL in console output)
4. All changes are immediately propagated to your local server, moreover all documentation pages will be automagically refreshed in a browser after each change
**TIP:** you can open `swagger-editor`, documentation and `swagger-ui` in parallel
5. Once you finish with the changes you can run tests using: `npm test`

## Thanks to contributors:
* [@clinique](https://github.com/clinique) : APIs upgrade and bug fixes
* [@wep4you](https://github.com/wep4you) : Camera API
