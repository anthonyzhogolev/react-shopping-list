const items = (state=[],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            console.log('addItemReduce',state,action.payload);
            return [...state,action.payload];
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

 