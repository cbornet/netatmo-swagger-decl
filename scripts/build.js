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
sed('-i', 'clientId: "your-client-id"', 'clientId: "55744f211977595c67874864"', 'web_deploy/swagger-ui/index.html');
sed('-i', 'clientSecret: "your-client-secret-if-required"', 'clientSecret: "2j9eANMyxorN7z1EGL9Jnf2N98vavLSPwwKLNkZxluj"', 'web_deploy/swagger-ui/index.html');
sed('-i', 'appName: "your-app-name"', 'appName: "Netatmo swagger"', 'web_deploy/swagger-ui/index.html');
sed('-i', '"Authorization","Bearer "\\+n,"header"', "'access_token', n, 'query'", 'web_deploy/swagger-ui/lib/swagger-oauth.js');