


const itemOrders = (state=[],action)=>{
    console.log('reducerActrion',action,state);
    switch(action.type){
        case 'ADD_ITEM_ORDER':
            const maxOrder = Math.max.apply(Math, state.map(function(itemOrder) { return itemOrder.order; }));
            return [...state, {itemId: action.payload.itemId,order: maxOrder+1}];
        case 'CHANGE_ORDER':            
            const oldOrder = state.find((itemOrder)=>(itemOrder.itemId===action.payload.id)).order;
            const newOrder = action.payload.order;
            if(newOrder<oldOrder){
                const newState = state.map(function(itemOrder){
                    if(itemOrder.order>=newOrder && itemOrder.order<oldOrder){                     
                            itemOrder.order=itemOrder.order+1                     
                    }
                    return itemOrder;
                });
                newState.find((itemOrder)=>itemOrder.itemId==action.payload.id).order=newOrder;
                return newState;
            } else {
                const newState = state.map(function(itemOrder){
                    if(itemOrder.order<=newOrder && itemOrder.order>oldOrder){                     
                            itemOrder.order=itemOrder.order-1                     
                    }
                    return itemOrder;
                });
                newState.find((itemOrder)=>itemOrder.itemId==action.payload.id).order=newOrder;
                return newState;
            }                                    
            break;
        default:
            return state;
    }
}
export default itemOrders;