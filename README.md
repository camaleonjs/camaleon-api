# camaleon-api

<img src="https://avatars2.githubusercontent.com/u/33430559?s=200" alt="Logo" width=200px/>

[![npm](https://img.shields.io/npm/dt/camaleon-api.svg?style=flat-square)](https://npmjs.com/package/camaleon-api)

`camaleon-api` is a [Restify](http://restify.com/) abstraction written in TypeScript.

## Installing

You can install `camaleon-api` with [npm](http://npmjs.org):

```
npm install camaleon-api
```

## Using
Camaleon API gives you productivity building RESTFul APIs.

### ApiStartup

```javascript
import { ApiStartup } from "camaleon-api";
import { HomeController } from "./controllers/home.controller";

const startup = new ApiStartup({
  port: 3000,
  controllers: [new HomeController()],
  beforeConfigure: (server) => {

  },
  afterConfigure: (server) => {

  }
});

startup.Run();

```

### IController

```javascript
import * as restify from "restify";
import { IController } from "camaleon-api";

export class HomeController implements IController {
    register(server: restify.Server): void {
        server.get("/", async (req, res, next) => {
            res.send(200, {});
        });
    }
}

```