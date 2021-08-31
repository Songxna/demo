/**
 * 功能：前后台路由对比 找符合规则的路由信息
 * 参数：
 * webRoutes 前台路由
 * serverRoutes 后台返回路由 
 */

export function ruleRoutes(webRoutes,serverRoutes){
    // 定义符合规则的数据
    let menuList=[]
    webRoutes.forEach(item => {
        serverRoutes.forEach(ele=>{
            if(item.meta.name===ele.name){
                if(ele.children&&ele.children.length>0){
                    item.children=ruleRoutes(item.children,ele.children)
                }
                menuList.push(item)
            }
        })
        
    });
    return menuList
}