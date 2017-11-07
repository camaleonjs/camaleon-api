import * as restify from "restify";
import { IController } from "./controller.intarface";
import { IOptions } from "./options.interface";

export class ApiStartup {

    private restifyServer: restify.Server;

    constructor(private options: IOptions) {

    }

    Run(): any {
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

        this.options.controllers.forEach(element => {
            element.register(this.restifyServer);
        });

        this.restifyServer.listen(this.options.port);

        if (this.options.afterConfigure) {
            this.options.afterConfigure(this.restifyServer);
        }
    }
}
