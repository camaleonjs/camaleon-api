import { Server } from "restify";
export interface IController {
    register(server: Server): void;
}
