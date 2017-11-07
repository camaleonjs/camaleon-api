import { IOptions } from "./options.interface";
export declare class ApiStartup {
    private options;
    private restifyServer;
    constructor(options: IOptions);
    Run(): Promise<any>;
}
