#!/usr/bin/env node
'use strict';
var Path = require('path');

require('shelljs/global');
set('-e');

mkdir('-p', 'web_deploy')

cp('-R', 'web/*', 'web_deploy/');

exec('npm run swagger bundle --        -o web_deploy/swagger.json');
exec('npm run swagger bundle -- --yaml -o web_deploy/swagger.yaml');

var SWAGGER_UI_DIST = Path.dirname(require.resolve('swagger-ui'));
rm('-rf', 'web_deploy/swagger-ui/');
cp('-R', SWAGGER_UI_DIST, 'web_deploy/swagger-ui/');
sed('-i', 'http://petstore.swagger.io/v2/swagger.json', '../swagger.json', 'web_deploy/swagger-ui/index.html');
sed('-i', 'clientId: "your-client-id"', 'clientId: "59f08639b4809d38888b7947"', 'web_deploy/swagger-ui/index.html');
sed('-i', 'clientSecret: "your-client-secret-if-required"', 'clientSecret: "bdOQtnD4OjzHJ5fgaHXMgfUMm9OpnpxG1QvIbVIj"', 'web_deploy/swagger-ui/index.html');
sed('-i', 'appName: "your-app-name"', 'appName: "Netatmo swagger"', 'web_deploy/swagger-ui/index.html');
sed('-i', '"Authorization","Bearer "\\+n,"header"', "'access_token', n, 'query'", 'web_deploy/swagger-ui/lib/swagger-oauth.js');