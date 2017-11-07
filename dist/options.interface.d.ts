import { Server } from "restify";
import { IController } from "./controller.intarface";
export interface IOptions {
    port: number;
    controllers: Array<IController>;
    beforeConfigure?: (server: Server) => any;
    afterConfigure?: (server: Server) => any;
}
