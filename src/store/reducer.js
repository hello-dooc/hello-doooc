const defaultState={
    address:[]
}
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'loadData':
            return{
                address:action.address,
            }

        default:
            return state;
    }
}

export default reducer