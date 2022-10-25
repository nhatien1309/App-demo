import { REST_API_METHOD as METHOD, BASE_URL } from '../contants'

const API_SCHEME = {
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