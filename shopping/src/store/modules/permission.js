import { constantsRoutes, asyncRoutes } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPemission (roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role));
    } else {
        return false;
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(roles, routes) {
    
}

const permission = {
    state: {
        routes: [],
        addRoutes: []
    },
    mutations: {

    },
    actions: {

    }
}

export default permission