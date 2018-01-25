Setting up proxy 
-----------------------
edit "start" of your package.json to look below

"start": "ng serve --proxy-config proxy.conf.json",

create a new file called proxy.conf.json in the root of the project and inside of that define your proxies like below


{
  "/proxy/*": {
  "target": "https://url.com",
  "secure": false,
  "changeOrigin": true,
  "logLevel": "debug",
  "pathRewrite": {"^/proxy" : ""}
  }
}



// Now replace all AJAX url path with proxy/REST_OF_THE_PATH_AS_USUAL
// For this project my API server is running at localhost:5000/ so my configuration looks like this


  "/proxy/*": {
  "target": "localhost:5000/",
  "secure": false,
  "changeOrigin": true,
  "logLevel": "debug",
  "pathRewrite": {"^/proxy" : ""}
  }
}



Important thing is that you use npm start instead of ng serve



















# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
