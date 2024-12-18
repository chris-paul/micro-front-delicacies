import { LOADING_SOURCE_CODE, NOT_BOOTSTRAPED, NOT_LOADED } from "../application/app.helpers.js"

/**
 * 因为外界传入的可能是数组 所以拍平为Promise
 * @param {*} fns 
 * @returns 
 */
function flattenArrayToPromise(fns) {
    fns = Array.isArray(fns) ? fns : [fns]
    return function(props){ // redux 
        return fns.reduce((rPromise,fn)=>rPromise.then(()=>fn(props)), Promise.resolve())
    }
}
/**
 * 开始加载应用
 * @param {*} app 
 * @returns 
 */
export function toLoadPromise(app){
    return Promise.resolve().then(()=>{
        if(app.status !== NOT_LOADED){
            // 此应用加载完毕了 
            return app;
        }
        app.status = LOADING_SOURCE_CODE; // 正在加载应用

        // loadApp 对于之前的内容 System.import()
        return app.loadApp(app.customProps).then(v=>{
            const {bootstrap,mount,unmount} = v;
            app.status = NOT_BOOTSTRAPED;
            app.bootstrap = flattenArrayToPromise(bootstrap);
            app.mount = flattenArrayToPromise(mount);
            app.unmount = flattenArrayToPromise(unmount);

            return app
        })
    })
}