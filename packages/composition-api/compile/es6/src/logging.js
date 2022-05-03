// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { LoggerManager } from "@dnvue/common";
/**
 * 使用管理运行时日志的方法。
 *
 * @export
 * @returns {LoggerManager}
 */
export function useLoggerManager() {
    return LoggerManager.currentLogger;
}
/**
 * 使用记录运行时日志的方法。
 *
 * @export
 * @returns {ILogger}
 */
export function useLogger() {
    return LoggerManager.currentLogger;
}
