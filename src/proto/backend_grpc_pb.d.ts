// package: pluginv2
// file: backend.proto

import * as grpc from 'grpc';
import * as backend_pb from './backend_pb';

interface IResourceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  callResource: IResourceService_ICallResource;
}

interface IResourceService_ICallResource {
  path: string; // "/pluginv2.Resource/CallResource"
  requestStream: boolean; // false
  responseStream: boolean; // true
  requestSerialize: grpc.serialize<backend_pb.CallResourceRequest>;
  requestDeserialize: grpc.deserialize<backend_pb.CallResourceRequest>;
  responseSerialize: grpc.serialize<backend_pb.CallResourceResponse>;
  responseDeserialize: grpc.deserialize<backend_pb.CallResourceResponse>;
}

export const ResourceService: IResourceService;
export interface IResourceServer {
  callResource: grpc.handleServerStreamingCall<backend_pb.CallResourceRequest, backend_pb.CallResourceResponse>;
}

export interface IResourceClient {
  callResource(request: backend_pb.CallResourceRequest, metadata?: grpc.Metadata): grpc.ClientReadableStream<backend_pb.CallResourceResponse>;
}

export class ResourceClient extends grpc.Client implements IResourceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public callResource(request: backend_pb.CallResourceRequest, metadata?: grpc.Metadata): grpc.ClientReadableStream<backend_pb.CallResourceResponse>;
}

interface IDataService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  queryData: IDataService_IQueryData;
}

interface IDataService_IQueryData {
  path: string; // "/pluginv2.Data/QueryData"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<backend_pb.QueryDataRequest>;
  requestDeserialize: grpc.deserialize<backend_pb.QueryDataRequest>;
  responseSerialize: grpc.serialize<backend_pb.QueryDataResponse>;
  responseDeserialize: grpc.deserialize<backend_pb.QueryDataResponse>;
}

export const DataService: IDataService;
export interface IDataServer {
  queryData: grpc.handleUnaryCall<backend_pb.QueryDataRequest, backend_pb.QueryDataResponse>;
}

export interface IDataClient {
  queryData(request: backend_pb.QueryDataRequest, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
  queryData(request: backend_pb.QueryDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
}

export class DataClient extends grpc.Client implements IDataClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public queryData(request: backend_pb.QueryDataRequest, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
  public queryData(request: backend_pb.QueryDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
}

interface IDiagnosticsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  checkHealth: IDiagnosticsService_ICheckHealth;
  collectMetrics: IDiagnosticsService_ICollectMetrics;
}

interface IDiagnosticsService_ICheckHealth {
  path: string; // "/pluginv2.Diagnostics/CheckHealth"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<backend_pb.CheckHealthRequest>;
  requestDeserialize: grpc.deserialize<backend_pb.CheckHealthRequest>;
  responseSerialize: grpc.serialize<backend_pb.CheckHealthResponse>;
  responseDeserialize: grpc.deserialize<backend_pb.CheckHealthResponse>;
}

interface IDiagnosticsService_ICollectMetrics {
  path: string; // "/pluginv2.Diagnostics/CollectMetrics"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<backend_pb.CollectMetricsRequest>;
  requestDeserialize: grpc.deserialize<backend_pb.CollectMetricsRequest>;
  responseSerialize: grpc.serialize<backend_pb.CollectMetricsResponse>;
  responseDeserialize: grpc.deserialize<backend_pb.CollectMetricsResponse>;
}

export const DiagnosticsService: IDiagnosticsService;
export interface IDiagnosticsServer {
  checkHealth: grpc.handleUnaryCall<backend_pb.CheckHealthRequest, backend_pb.CheckHealthResponse>;
  collectMetrics: grpc.handleUnaryCall<backend_pb.CollectMetricsRequest, backend_pb.CollectMetricsResponse>;
}

export interface IDiagnosticsClient {
  checkHealth(request: backend_pb.CheckHealthRequest, callback: (error: Error | null, response: backend_pb.CheckHealthResponse) => void): grpc.ClientUnaryCall;
  checkHealth(request: backend_pb.CheckHealthRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.CheckHealthResponse) => void): grpc.ClientUnaryCall;
  collectMetrics(request: backend_pb.CollectMetricsRequest, callback: (error: Error | null, response: backend_pb.CollectMetricsResponse) => void): grpc.ClientUnaryCall;
  collectMetrics(request: backend_pb.CollectMetricsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.CollectMetricsResponse) => void): grpc.ClientUnaryCall;
}

export class DiagnosticsClient extends grpc.Client implements IDiagnosticsClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public checkHealth(request: backend_pb.CheckHealthRequest, callback: (error: Error | null, response: backend_pb.CheckHealthResponse) => void): grpc.ClientUnaryCall;
  public checkHealth(request: backend_pb.CheckHealthRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.CheckHealthResponse) => void): grpc.ClientUnaryCall;
  public collectMetrics(request: backend_pb.CollectMetricsRequest, callback: (error: Error | null, response: backend_pb.CollectMetricsResponse) => void): grpc.ClientUnaryCall;
  public collectMetrics(request: backend_pb.CollectMetricsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.CollectMetricsResponse) => void): grpc.ClientUnaryCall;
}

interface ITransformService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transformData: ITransformService_ITransformData;
}

interface ITransformService_ITransformData {
  path: string; // "/pluginv2.Transform/TransformData"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<backend_pb.QueryDataRequest>;
  requestDeserialize: grpc.deserialize<backend_pb.QueryDataRequest>;
  responseSerialize: grpc.serialize<backend_pb.QueryDataResponse>;
  responseDeserialize: grpc.deserialize<backend_pb.QueryDataResponse>;
}

export const TransformService: ITransformService;
export interface ITransformServer {
  transformData: grpc.handleUnaryCall<backend_pb.QueryDataRequest, backend_pb.QueryDataResponse>;
}

export interface ITransformClient {
  transformData(request: backend_pb.QueryDataRequest, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
  transformData(request: backend_pb.QueryDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
}

export class TransformClient extends grpc.Client implements ITransformClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public transformData(request: backend_pb.QueryDataRequest, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
  public transformData(request: backend_pb.QueryDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
}

interface ITransformDataCallBackService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  queryData: ITransformDataCallBackService_IQueryData;
}

interface ITransformDataCallBackService_IQueryData {
  path: string; // "/pluginv2.TransformDataCallBack/QueryData"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<backend_pb.QueryDataRequest>;
  requestDeserialize: grpc.deserialize<backend_pb.QueryDataRequest>;
  responseSerialize: grpc.serialize<backend_pb.QueryDataResponse>;
  responseDeserialize: grpc.deserialize<backend_pb.QueryDataResponse>;
}

export const TransformDataCallBackService: ITransformDataCallBackService;
export interface ITransformDataCallBackServer {
  queryData: grpc.handleUnaryCall<backend_pb.QueryDataRequest, backend_pb.QueryDataResponse>;
}

export interface ITransformDataCallBackClient {
  queryData(request: backend_pb.QueryDataRequest, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
  queryData(request: backend_pb.QueryDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
}

export class TransformDataCallBackClient extends grpc.Client implements ITransformDataCallBackClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public queryData(request: backend_pb.QueryDataRequest, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
  public queryData(request: backend_pb.QueryDataRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: backend_pb.QueryDataResponse) => void): grpc.ClientUnaryCall;
}

