import { NOT_LOADED } from './app.helpers.js'
import { reroute } from '../navigation/reroute.js'
/**
 * 注册 查看路径是否匹配 如果匹配就加载对应的应用
 */
export const apps = []
export function registerApplication(appName, loadApp, activeWhen, customProps) {
    const registertion = {
        name: appName,
        loadApp,
        activeWhen,
        customProps,
        status:NOT_LOADED
    }

    apps.push(registertion)

    // 需要检查哪些应用要被加载，还有哪些应用要被挂载，还有哪些应用要被移除
    reroute()
}


