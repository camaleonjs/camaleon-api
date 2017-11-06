"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
class ApiStartup {
    constructor() {
        this.port = 3000;
        this.controllers = new Array();
    }
    Run() {
        return __awaiter(this, void 0, void 0, function* () {
            this.restifyServer = restify.createServer();
            this.restifyServer.use(restify.plugins.acceptParser(this.restifyServer.acceptable));
            this.restifyServer.use(restify.plugins.authorizationParser());
            this.restifyServer.use(restify.plugins.dateParser());
            this.restifyServer.use(restify.plugins.queryParser());
            this.restifyServer.use(restify.plugins.jsonp());
            this.restifyServer.use(restify.plugins.gzipResponse());
            this.restifyServer.use(restify.plugins.bodyParser({ mapParams: true }));
            this.controllers.forEach(element => {
                element.register(this.restifyServer);
            });
            return new Promise((resolve, reject) => {
                this.restifyServer.listen(this.port, () => {
                    resolve();
                });
            });
        });
    }
}
exports.ApiStartup = ApiStartup;
