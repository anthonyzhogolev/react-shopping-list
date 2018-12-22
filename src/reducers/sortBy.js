const SortBy = (state=[],action)=>{
    switch(action.type){
        case 'CHANGE_SORT_BY':            
            return Object.assign({},state,{columnName:action.payload.columnName,direction:action.payload.direction});
        default:
            return state;
    }
}
export default SortBy;