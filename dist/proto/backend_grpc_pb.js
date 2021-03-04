// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var backend_pb = require('./backend_pb.js');

function serialize_pluginv2_CallResourceRequest(arg) {
  if (!(arg instanceof backend_pb.CallResourceRequest)) {
    throw new Error('Expected argument of type pluginv2.CallResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_CallResourceRequest(buffer_arg) {
  return backend_pb.CallResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pluginv2_CallResourceResponse(arg) {
  if (!(arg instanceof backend_pb.CallResourceResponse)) {
    throw new Error('Expected argument of type pluginv2.CallResourceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_CallResourceResponse(buffer_arg) {
  return backend_pb.CallResourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pluginv2_CheckHealthRequest(arg) {
  if (!(arg instanceof backend_pb.CheckHealthRequest)) {
    throw new Error('Expected argument of type pluginv2.CheckHealthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_CheckHealthRequest(buffer_arg) {
  return backend_pb.CheckHealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pluginv2_CheckHealthResponse(arg) {
  if (!(arg instanceof backend_pb.CheckHealthResponse)) {
    throw new Error('Expected argument of type pluginv2.CheckHealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_CheckHealthResponse(buffer_arg) {
  return backend_pb.CheckHealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pluginv2_CollectMetricsRequest(arg) {
  if (!(arg instanceof backend_pb.CollectMetricsRequest)) {
    throw new Error('Expected argument of type pluginv2.CollectMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_CollectMetricsRequest(buffer_arg) {
  return backend_pb.CollectMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pluginv2_CollectMetricsResponse(arg) {
  if (!(arg instanceof backend_pb.CollectMetricsResponse)) {
    throw new Error('Expected argument of type pluginv2.CollectMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_CollectMetricsResponse(buffer_arg) {
  return backend_pb.CollectMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pluginv2_QueryDataRequest(arg) {
  if (!(arg instanceof backend_pb.QueryDataRequest)) {
    throw new Error('Expected argument of type pluginv2.QueryDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_QueryDataRequest(buffer_arg) {
  return backend_pb.QueryDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pluginv2_QueryDataResponse(arg) {
  if (!(arg instanceof backend_pb.QueryDataResponse)) {
    throw new Error('Expected argument of type pluginv2.QueryDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pluginv2_QueryDataResponse(buffer_arg) {
  return backend_pb.QueryDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ---------------------------------------------------------
// Resource service enables HTTP-style requests over gRPC.
// ---------------------------------------------------------
//
var ResourceService = exports.ResourceService = {
  callResource: {
    path: '/pluginv2.Resource/CallResource',
    requestStream: false,
    responseStream: true,
    requestType: backend_pb.CallResourceRequest,
    responseType: backend_pb.CallResourceResponse,
    requestSerialize: serialize_pluginv2_CallResourceRequest,
    requestDeserialize: deserialize_pluginv2_CallResourceRequest,
    responseSerialize: serialize_pluginv2_CallResourceResponse,
    responseDeserialize: deserialize_pluginv2_CallResourceResponse,
  },
};

exports.ResourceClient = grpc.makeGenericClientConstructor(ResourceService);
// -----------------------------------------------
// Data
// -----------------------------------------------
//
var DataService = exports.DataService = {
  queryData: {
    path: '/pluginv2.Data/QueryData',
    requestStream: false,
    responseStream: false,
    requestType: backend_pb.QueryDataRequest,
    responseType: backend_pb.QueryDataResponse,
    requestSerialize: serialize_pluginv2_QueryDataRequest,
    requestDeserialize: deserialize_pluginv2_QueryDataRequest,
    responseSerialize: serialize_pluginv2_QueryDataResponse,
    responseDeserialize: deserialize_pluginv2_QueryDataResponse,
  },
};

exports.DataClient = grpc.makeGenericClientConstructor(DataService);
// -----------------------------------------------
// Diagnostics
// -----------------------------------------------
//
var DiagnosticsService = exports.DiagnosticsService = {
  checkHealth: {
    path: '/pluginv2.Diagnostics/CheckHealth',
    requestStream: false,
    responseStream: false,
    requestType: backend_pb.CheckHealthRequest,
    responseType: backend_pb.CheckHealthResponse,
    requestSerialize: serialize_pluginv2_CheckHealthRequest,
    requestDeserialize: deserialize_pluginv2_CheckHealthRequest,
    responseSerialize: serialize_pluginv2_CheckHealthResponse,
    responseDeserialize: deserialize_pluginv2_CheckHealthResponse,
  },
  collectMetrics: {
    path: '/pluginv2.Diagnostics/CollectMetrics',
    requestStream: false,
    responseStream: false,
    requestType: backend_pb.CollectMetricsRequest,
    responseType: backend_pb.CollectMetricsResponse,
    requestSerialize: serialize_pluginv2_CollectMetricsRequest,
    requestDeserialize: deserialize_pluginv2_CollectMetricsRequest,
    responseSerialize: serialize_pluginv2_CollectMetricsResponse,
    responseDeserialize: deserialize_pluginv2_CollectMetricsResponse,
  },
};

exports.DiagnosticsClient = grpc.makeGenericClientConstructor(DiagnosticsService);
// -----------------------------------------------
// Transform - Very experimental
// -----------------------------------------------
//
var TransformService = exports.TransformService = {
  transformData: {
    path: '/pluginv2.Transform/TransformData',
    requestStream: false,
    responseStream: false,
    requestType: backend_pb.QueryDataRequest,
    responseType: backend_pb.QueryDataResponse,
    requestSerialize: serialize_pluginv2_QueryDataRequest,
    requestDeserialize: deserialize_pluginv2_QueryDataRequest,
    responseSerialize: serialize_pluginv2_QueryDataResponse,
    responseDeserialize: deserialize_pluginv2_QueryDataResponse,
  },
};

exports.TransformClient = grpc.makeGenericClientConstructor(TransformService);
var TransformDataCallBackService = exports.TransformDataCallBackService = {
  queryData: {
    path: '/pluginv2.TransformDataCallBack/QueryData',
    requestStream: false,
    responseStream: false,
    requestType: backend_pb.QueryDataRequest,
    responseType: backend_pb.QueryDataResponse,
    requestSerialize: serialize_pluginv2_QueryDataRequest,
    requestDeserialize: deserialize_pluginv2_QueryDataRequest,
    responseSerialize: serialize_pluginv2_QueryDataResponse,
    responseDeserialize: deserialize_pluginv2_QueryDataResponse,
  },
};

exports.TransformDataCallBackClient = grpc.makeGenericClientConstructor(TransformDataCallBackService);
