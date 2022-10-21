import { REST_API_METHOD as METHOD, BASE_URL } from '../contants'

const API_SCHEME = {
    // update when apply real authen api
    // AUTHEN: {
    //     VALIDATE_TOKEN: {
    //         url: `${BASE_URL}/auth`,
    //         method: METHOD.GET
    //     },
    //     LOGIN: {
    //         url: `${BASE_URL}/auth`,
    //         method: METHOD.GET
    //     },
    //     LOGOUT: {
    //         url: `${BASE_URL}/logout`,
    //         method: METHOD.POST
    //     }
    // },
    // business api
    ITEMS: {
        GET_LIST: {
            url: `${BASE_URL}/name`,
            method: METHOD.GET
        },
        CREATE: {
            url: `${BASE_URL}/name`,
            method: METHOD.POST
        },
        UPDATE: {
            url: `${BASE_URL}/name/:id`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/name/:id`,
            method: METHOD.DELETE
        }
    }
}

export default API_SCHEME