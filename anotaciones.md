# React

## Iniciar el desarrollo de un proyecto de react

```sh
npm create vite@latest ./ # 1. react - 2. javascript
npm i
npm run dev
```

## Documentación oficial y links

<https://es.react.dev/>
<https://es.legacy.reactjs.org/>
<https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi>

## JSX

<https://es.legacy.reactjs.org/docs/introducing-jsx.html>

## Virtual DOM

![react](_ref/dom-virutal.png)

<https://es.legacy.reactjs.org/docs/faq-internals.html>

## Linter y configuracion de React en VITE

* usernamehw.errorlens
* dbaeumer.vscode-eslint

## Extensiones fundamentales para el trabajo con REACT

* dsznajder.es7-react-js-snippets

## Bootstrap (Framework - html - css - javascript)

<https://getbootstrap.com/>

```sh
npm i bootstrap@5.3.3
```

## Para que bootstrap funcione, tengo que colocar el script y la hoja de estilos

> index.css

```css
@import 'bootstrap';
```

> main.js

```js
import * as bootstrap from 'bootstrap'
```

## Agregar a nuestro proyecto react la librería react router

```sh
npm install react-router@6 react-router-dom@6
```

# Incorporar JSON-SERVER

<https://www.npmjs.com/package/json-server/v/0.17.4>


```sh
npm i json-server@0.17.4 -D # -D -> Depedencia de desarrollo. 
```

**IMPORTANTE:** Depedencia de desarrollo: Que solo se va usar en desarrollo y no se va a instalar cuando lo suba a un host.


## Tenemos que agregar en el archivo package.json

```json
"scripts": {
    "dev": "vite",
    "server": "json-server --watch data/db.json --port 8080"
  },
```

## Para arrancar el servidor json-server

```sh
npm run server
```

## Detener el servidor

(Ctrl) + C

## La url donde voy a tener la info

<http://localhost:8080/productos/>

# Agrego React Router a un proyecto

```sh
npm i react-router react-router-dom
``` 
