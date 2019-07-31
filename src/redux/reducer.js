import {ADD, SUPP} from '../const/actionTypes'
import {todo} from '../const/data'

const initState={
    list:todo
}


const reducer = (state=initState, action) => {
    switch(action.type){
        case ADD: return {...state,list:state.list.concat(action.payload)}
        case SUPP: return {...state,list:state.list.filter((e,i)=> i!== action.payload)}
        default: return state
    }
   
}

export default reducer


