/**
 * Currently implemented with:
 * https://docs.angularjs.org/api/ng/service/$http#usage
 * but that will likely change in the future
 */
export type BackendSrvRequest<T> = {
  url: string;
  retry?: number;
  headers?: any;
  method?: string;
  body?: T; 

  // Show a message with the result
  showSuccessAlert?: boolean;

  // A requestID is provided by the datasource as a unique identifier for a
  // particular query. If the requestID exists, the promise it is keyed to
  // is canceled, canceling the previous datasource request if it is still
  // in-flight.
  requestId?: string;

  // Allow any other parameters
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

  // If there is an error, set: err.isHandled = true
  // otherwise the backend will show a message for you
  request<T>(options: BackendSrvRequest<T>): Promise<any>;

  // DataSource requests add hooks into the query inspector
  datasourceRequest<T>(options: BackendSrvRequest<T>): Promise<BackendSrvResponse<T>>;
}

let singletonInstance: BackendSrv;

export function setBackendSrv(instance: BackendSrv) {
  singletonInstance = instance;
}

export function getBackendSrv(): BackendSrv {
  return singletonInstance;
}
