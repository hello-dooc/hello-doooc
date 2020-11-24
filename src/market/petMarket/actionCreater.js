import {LOADDATA,CHANGETYPE} from './actionTypes'
import { get } from '@u/http'
const loadDataSync=(list)=>{
    return {
        type:LOADDATA,
        list
    }
}
const loadDataAsync=(pet)=>{
    return async (dispatch) =>{
        let result = await get({
            url:`http://10.9.12.250:8088/${pet}/findAll`
        })
        // console.log(result);
        dispatch(loadDataSync(result.data.data))
    }
}
const changePetType=(petType)=>{
    return {
        type:CHANGETYPE,
        petType
    }
}

export {
    loadDataSync,
    loadDataAsync,
    changePetType,
}