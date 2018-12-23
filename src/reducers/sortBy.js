const SortBy = (state=[],action)=>{
    console.log('SortByReducerAction',action);
    switch(action.type){
        case 'CHANGE_SORT_BY':            
            return Object.assign({},state,{columnName:action.payload.columnName,direction:action.payload.direction});
        case 'UNSET_SORT_BY':
            return Object.assign({},state,{columnName:null,direction:null});
        default:
            return state;
    }
}
export default SortBy;