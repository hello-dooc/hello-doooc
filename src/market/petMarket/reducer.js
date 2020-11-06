import {LOADDATA,CHANGETYPE} from './actionTypes'
const defaultState={
    list:[],
    petType:''
}
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            return{
                list:action.list,
            }
        case CHANGETYPE:
            return {
                list:action.list,
                petType:action.petType
            }
        default:
            return state;
    }
}

export default reducer