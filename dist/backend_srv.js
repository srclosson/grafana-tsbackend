"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let singletonInstance;
function setBackendSrv(instance) {
    singletonInstance = instance;
}
exports.setBackendSrv = setBackendSrv;
function getBackendSrv() {
    return singletonInstance;
}
exports.getBackendSrv = getBackendSrv;
//# sourceMappingURL=backend_srv.js.map