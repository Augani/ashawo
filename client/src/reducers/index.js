import {LoginUser} from '../actions';
import {LOGIN} from '../actions/types';

const INITIAL_STATE = {
    USER_LOGGED_IN: false,
    USER: {}
}

const Reducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                USER_LOGGED_IN: true,
                USER: action.payload
            }
        default:
            return state;    

    }
}

export default Reducer;