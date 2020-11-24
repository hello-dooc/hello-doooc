import {LOADDATA} from './actionTypes'
import { get } from '@u/http'
import axios from 'axios'
import {getToken} from '@u/cookies'
const loadDataSync=(list)=>{
    return {
        type:LOADDATA,
        list
    }
}
const loadDataAsync=()=>{
    return async (dispatch) =>{
        let token = getToken()
        console.log(token);
        // axios.defaults.headers.common["token"] = 'token_123456';
        if(token){
            axios.defaults.headers.common["token"] = token;
            let result = await get({
                url:'http://10.9.12.250:8088/user/address/list',    
            })
            console.log(result);
            dispatch(loadDataSync(result.data.data))
        }
    }
}

export {
    loadDataSync,
    loadDataAsync,
}