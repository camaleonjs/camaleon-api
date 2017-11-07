"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
var ApiStartup = /** @class */ (function () {
    function ApiStartup(options) {
        this.options = options;
    }
    ApiStartup.prototype.Run = function () {
        var _this = this;
        this.restifyServer = restify.createServer();
        if (this.options.beforeConfigure) {
            this.options.beforeConfigure(this.restifyServer);
        }
        this.restifyServer.use(restify.plugins.acceptParser(this.restifyServer.acceptable));
        this.restifyServer.use(restify.plugins.authorizationParser());
        this.restifyServer.use(restify.plugins.dateParser());
        this.restifyServer.use(restify.plugins.queryParser());
        this.restifyServer.use(restify.plugins.jsonp());
        this.restifyServer.use(restify.plugins.gzipResponse());
        this.restifyServer.use(restify.plugins.bodyParser({ mapParams: true }));
        this.options.controllers.forEach(function (element) {
            element.register(_this.restifyServer);
        });
        this.restifyServer.listen(this.options.port);
        if (this.options.afterConfigure) {
            this.options.afterConfigure(this.restifyServer);
        }
    };
    return ApiStartup;
}());
exports.ApiStartup = ApiStartup;
