import axios from 'axios';

let base = '';
let NewBase = 'http://localhost:8100/j';

const request = (url, options={}, method='get') => {
    let key = method in ['delete', 'get', 'head'] ? 'params' : 'data';
    return axios(Object.assign({'url': url, 'method':method}, {[key]: options})).then(
        res => res).catch((error) => {
            console.log(error);
        });
}

const requestLogin = () => {
    return request(`${NewBase}/login`, {}, 'post');
};

const requestLogout = () => {
    return request(`${NewBase}/logout`, {}, 'post');
};

const getUserList = params => {
    return request(`${NewBase}/users`, params);
}

const getGroupSetings = _ => {
    return request(`${NewBase}/settings/group`);
}

const updateGroupSetings = params => {
    return request(`${NewBase}/settings/group`, params, 'put');
}

const getGroupList = params => {
    return request(`${NewBase}/groups`, params);
}

const removeUser = (id, params) => {
    return request(`${NewBase}/user/${id}`, params, 'delete');
}

const removeGroup = id => {
    return request(`${NewBase}/group/${id}`, {}, 'delete');
}

const batchRemoveUser  = params => {
    return request(`${NewBase}/users`, params, 'delete');
}

const batchRemoveGroup  = params => {
    return request(`${NewBase}/groups`, params, 'delete');
}

const addUser = params => {
    return request(`${NewBase}/user/${params.wxid}`, params, 'put');
}

const addUsers = params => {
    return request(`${NewBase}/users`, params, 'put');
}

const getAllUsers = () => {
    return request(`${NewBase}/all_users`);
}

module.exports = {
    requestLogin,
    requestLogout,
    getUserList,
    removeUser,
    addUser,
    addUsers,
    batchRemoveUser,
    getGroupList,
    batchRemoveGroup,
    removeGroup,
    getAllUsers,
    getGroupSetings,
    updateGroupSetings
};
