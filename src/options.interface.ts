import { Server } from "restify";
import { IController } from "./controller.intarface";

export interface IOptions {

    port: number;
    controllers: Array<IController>;
    afterConfigure?: (server: Server) => any;
    beforeConfigure?: (server: Server) => any;
}
