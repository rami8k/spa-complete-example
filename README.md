A full functioning example for using single-spa with module federation using systemjs.

### app1 and app2
Are exactly the same:

Features:
* vue 2.6.4
* webpack 5 with module federation plugin
* both exposing single-spa vue components as modules through module federation plugin
* both share vue as shared resource through module federation plugin

To run each app navigate to the app directory and run
```
yarn
yarn serve
```

### front-end
A container app that serves content from app1 & app2

Features:
* systemjs
* import maps
* webpack 5
* ejs template

To run the app navigate to the app directory and run
```
yarn serve
```