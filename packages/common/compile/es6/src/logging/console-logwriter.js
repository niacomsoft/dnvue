// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LogWriter } from "./logwriter";
import { sealed } from "../decorators";
/**
 * 提供了基于 Console 记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ConsoleLogWriter
 * @extends {LogWriter}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
let ConsoleLogWriter = class ConsoleLogWriter extends LogWriter {
    writeDebug(debugEntry) {
        console.debug(`${debugEntry === null || debugEntry === void 0 ? void 0 : debugEntry.message} See %o`, { contextData: debugEntry === null || debugEntry === void 0 ? void 0 : debugEntry.contextData, contextError: debugEntry === null || debugEntry === void 0 ? void 0 : debugEntry.error, time: new Date() });
    }
    writeTrace(traceEntry) {
        console.trace(`${traceEntry === null || traceEntry === void 0 ? void 0 : traceEntry.message} See %o`, { contextData: traceEntry === null || traceEntry === void 0 ? void 0 : traceEntry.contextData, contextError: traceEntry === null || traceEntry === void 0 ? void 0 : traceEntry.error, time: new Date() });
    }
    writeInformation(infoEntry) {
        console.info(`${infoEntry === null || infoEntry === void 0 ? void 0 : infoEntry.message} See %o`, { contextData: infoEntry === null || infoEntry === void 0 ? void 0 : infoEntry.contextData, contextError: infoEntry === null || infoEntry === void 0 ? void 0 : infoEntry.error, time: new Date() });
    }
    writeWarning(warnEntry) {
        console.warn(`${warnEntry === null || warnEntry === void 0 ? void 0 : warnEntry.message} See %o`, { contextData: warnEntry === null || warnEntry === void 0 ? void 0 : warnEntry.contextData, contextError: warnEntry === null || warnEntry === void 0 ? void 0 : warnEntry.error, time: new Date() });
    }
    writeError(errorEntry) {
        console.error(`${errorEntry === null || errorEntry === void 0 ? void 0 : errorEntry.message} See %o`, { contextData: errorEntry === null || errorEntry === void 0 ? void 0 : errorEntry.contextData, contextError: errorEntry === null || errorEntry === void 0 ? void 0 : errorEntry.error, time: new Date() });
    }
};
ConsoleLogWriter = __decorate([
    sealed
], ConsoleLogWriter);
export { ConsoleLogWriter };
/**
 * 提供了创建 ConsoleLogWriter 类型的对象实例相关的工厂方法。
 *
 * @export
 * @class ConsoleLogWriterFactory
 * @implements {dnvue.ILogWriterFactory}
 */
export class ConsoleLogWriterFactory {
    create() {
        var _a;
        if (!((_a = window.__SINGLETON_MANAGER__) === null || _a === void 0 ? void 0 : _a.CONSOLE_LOGWRITER)) {
            if (!window.__SINGLETON_MANAGER__) {
                window.__SINGLETON_MANAGER__ = {};
            }
            window.__SINGLETON_MANAGER__.CONSOLE_LOGWRITER = new ConsoleLogWriter();
        }
        return window.__SINGLETON_MANAGER__.CONSOLE_LOGWRITER;
    }
}
