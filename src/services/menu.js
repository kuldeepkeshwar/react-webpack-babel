
import fakeMenus from './../../dummy/menus';
export function getMenu(scb,ecb){
    return new Promise((resolve,reject)=>{
        resolve(fakeMenus);
    })
}