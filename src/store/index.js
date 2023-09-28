import {createStore} from 'redux'
const initialState = {counter : 0, showCounter : true}
const counterReducer = (state =initialState,action) =>{
if(action.type==='incrementby2'){
    return{
        counter: state.counter+2,
        showCounter: state.showCounter
    }
}
if(action.type==='decrementby2'){
    return{
        counter: state.counter-2,
        showCounter:state.showCounter
    }
}

if(action.type==='increase'){
    return{
        counter: state.counter+action.amount,
        showCounter : state.showCounter
    }
}

if(action.type==='decrease'){
    return{
        counter: state.counter-action.amount,
        showCounter : state.showCounter
    }
}

if(action.type==='toggle'){
    return{
        showCounter: !state.showCounter,
        counter : state.counter
    }
}
return state
}

const store = createStore(counterReducer)

export default store