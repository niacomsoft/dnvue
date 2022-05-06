// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference path="lib.interfaces.d.ts" />

export { };

declare global {
    /**
     * 为 Window 类型提供的扩展方法。
     *
     * @interface Window
     */
    interface Window {
        /**
         * 默认的记录运行时日志的方法。
         *
         * @type {dnvue.ILogWriter}
         * @memberof Window
         */
        DEFAULT_LOGWRITER: dnvue.ILogWriter;

        /**
         * 管理 DEFAULT_LOGWRITER 的默认工厂方法。
         *
         * @type {dnvue.ILogWriterFactory}
         * @memberof Window
         */
        DEFAULT_LOGWRITER_FACTORY: dnvue.ILogWriterFactory;

        /**
         * 统一记录运行时日志的门面方法。
         *
         * @type {dnvue.ILogger}
         * @memberof Window
         */
        DEFAULT_LOGGER: dnvue.ILogger;

        /**
         * 默认的字符串解释程序。
         *
         * @type {dnvue.IStringResolver}
         * @memberof Window
         */
        DEFAULT_STRING_RESOLVER: dnvue.IStringResolver;

        /**
         * 单例管理工具。
         *
         * @type {Record<string, any>}
         * @memberof Window
         */
        DNVUE_SINGLETON_INSTANCE_MANAGER: Record<string, any>;
    }

    interface StringConstructor {
        /**
         * 空白字符串。
         *
         * @returns {string}
         */
        empty(): string;

        /**
         * 用于校验字符串 s 是否等于 null、undefined 或者空白符。
         *
         * @param {(string | null | undefined)} [s] 需要校验的值。
         * @returns {boolean}
         * @memberof StringConstructor
         */
        isNullOrEmpty(s?: string | null | undefined): boolean;

        /**
         * 用于校验字符串 s 是否等于 null、undefined、空白符或者空格。
         *
         * @param {(string | null | undefined)} [s] 需要校验的值。
         * @returns {boolean}
         * @memberof StringConstructor
         */
        isNullOrWhitespace(s?: string | null | undefined): boolean;
    }
}