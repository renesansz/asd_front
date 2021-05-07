# asd_front

## Prerequisites

* Must have Node JS installed (minimum version: 8.11, recommended version: 12+)

By opening your command line, execute the following:
## 1. Project setup
```
npm install
```

## 2. Add API_URL & API_TOKEN to .env

Create a copy of `.env.tpl` and name it as `.env` and generate an `API_TOKEN` please see [API Docs](https://github.com/renesansz/asd_api#transacting-with-the-api).

Fill in the keys inside

```
VUE_APP_API_URL=<your-api-url>
VUE_APP_API_TOKEN=<your-generated-token-here>
```

## 3. Running the app in local
```
npm run serve
```

## Additional Commands:

### Run Unit-Test
```
npm run test:unit
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
