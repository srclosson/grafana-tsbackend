import { DataSourceInstanceSettings } from './proto/backend_pb';
export declare class API {
    constructor(settings: DataSourceInstanceSettings.AsObject);
    testDatasource(): any;
}
