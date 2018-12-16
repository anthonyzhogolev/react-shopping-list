const items = (state=[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':            
            return [...state,action.payload];
        case 'DELETE_ITEM':
            console.log('reducerDeleteItem', state.filter((item)=>(item.id!==action.payload.id)));
            return state.filter((item)=>(item.id!==action.payload.id));
        default:
            return state;
    }

    return state;
}

export default items;

export const getSortedItems = (state,params) => {
    console.log('getSortItems item.js',state,params);
    const res = [];
    for(let itemOrder of params){
        res[itemOrder.order] = state.find((item)=>(item.id==itemOrder.itemId));
        res[itemOrder.order].order=itemOrder.order
    }    
    console.log('getSortedItem items.js res',res);
    return res;    
 }

 