const itemOrders = (state=[],action)=>{
    return state;
}

export default itemOrders;

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

 