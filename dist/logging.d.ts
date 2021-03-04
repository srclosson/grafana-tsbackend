/// <reference types="node" />
export declare class Logger implements Console {
    Console: NodeJS.ConsoleConstructor;
    memory: any;
    private innerLog;
    assert(condition?: boolean | undefined, message?: string | undefined, ...data: any[]): void;
    assert(value: any, message?: string | undefined, ...optionalParams: any[]): void;
    clear(): void;
    count(label?: any): void;
    debug(...messages: any[]): void;
    dir(...args: any[]): void;
    dirxml(...args: any[]): void;
    error(...messages: any[]): void;
    exception(message?: string | undefined, ...optionalParams: any[]): void;
    group(...groupTitle: any[]): void;
    groupCollapsed(...groupTitle: any[]): void;
    groupEnd(): void;
    info(...messages: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    markTimeline(label?: string | undefined): void;
    markTimeline(label?: string | undefined): void;
    profile(reportName?: string | undefined): void;
    profile(label?: string | undefined): void;
    profileEnd(reportName?: string | undefined): void;
    profileEnd(label?: string | undefined): void;
    table(...args: any[]): void;
    time(label?: any): void;
    timeEnd(label?: any): void;
    timeStamp(label?: any): void;
    timeline(label?: any): void;
    timelineEnd(label?: any): void;
    trace(...messages: any[]): void;
    warn(...messages: any[]): void;
    countReset(label?: string | undefined): void;
    timeLog(label?: string | undefined, ...data: any[]): void;
}
