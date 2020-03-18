import {LOGIN} from './types'


export const LoginUser = data =>{
    return {
        payload: data,
        type: LOGIN
    }
}