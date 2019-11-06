let initState={
    list:[]
};
let actions={
    SET_LIST(state,action){
        state.list=action.value
    }
}
let ListReducer=function(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state));
    actions[action.type]&&actions[action.type](newState,action);
    return {...newState}
};

export default ListReducer;