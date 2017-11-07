import * as restify from 'restify';
import { IController } from './controller.intarface';
import { IOptions } from './options.interface';

export class ApiStartup {

    private restifyServer: restify.Server;

    constructor(private options: IOptions) {

    }

    async Run(): Promise<any> {

        this.restifyServer = restify.createServer();

        this.options.beforeConfigure(this.restifyServer);

        this.restifyServer.use(restify.plugins.acceptParser(this.restifyServer.acceptable));
        this.restifyServer.use(restify.plugins.authorizationParser());
        this.restifyServer.use(restify.plugins.dateParser());
        this.restifyServer.use(restify.plugins.queryParser());
        this.restifyServer.use(restify.plugins.jsonp());
        this.restifyServer.use(restify.plugins.gzipResponse());
        this.restifyServer.use(restify.plugins.bodyParser({ mapParams: true }));

        this.options.afterConfigure(this.restifyServer);

        this.options.controllers.forEach(element => {
            element.register(this.restifyServer);
        });

        return new Promise((resolve, reject) => {
            this.restifyServer.listen(this.options.port, (err) => {
                resolve(err);
            });
        });

    }
}
