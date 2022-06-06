// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { LocalizationOptions } from "../locale";
import { App } from "vue";
import { createI18n } from "vue-i18n";

/**
 * 启用本地化资源组件。
 *
 * @export
 * @param {App} app
 * @returns {App}
 */
export function useLocalizations(app: App): App {
    const locale = createI18n(LocalizationOptions);

    return app.use(locale);
}