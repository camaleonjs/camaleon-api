import { Server } from 'restify';
export interface IController {
    register(server: Server): void;
}
export declare class ApiStartup {
    private restifyServer;
    port: Number;
    controllers: Array<IController>;
    Run(): Promise<any>;
}
