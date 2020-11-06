/**
 * Currently implemented with:
 * https://docs.angularjs.org/api/ng/service/$http#usage
 * but that will likely change in the future
 */
export declare type BackendSrvRequest<T> = {
    url: string;
    retry?: number;
    headers?: any;
    method?: string;
    body?: T;
    showSuccessAlert?: boolean;
    requestId?: string;
    [key: string]: any;
};
export interface BackendSrvResponse<T> {
    data: T;
}
export interface BackendSrv {
    get(url: string, params?: any): Promise<any>;
    delete(url: string): Promise<any>;
    post(url: string, data?: any): Promise<any>;
    patch(url: string, data?: any): Promise<any>;
    put(url: string, data?: any): Promise<any>;
    request<T>(options: BackendSrvRequest<T>): Promise<any>;
    datasourceRequest<T>(options: BackendSrvRequest<T>): Promise<BackendSrvResponse<T>>;
}
export declare function setBackendSrv(instance: BackendSrv): void;
export declare function getBackendSrv(): BackendSrv;
