const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':

            return state.filter((item) => (item.id !== action.payload.id));
        case 'MARK_AS_READ_ITEM':

            return state.map(function (item) {
                if (item.id == action.payload.id) {
                    item.isRead = true;
                }
                return item;
            });
        default:
            return state;
    }

    return state;
}

export default items;

export const getDndSortedItems = (items, itemOrders) => {

    const res = [];
    const sortedItemOrders = itemOrders.slice().sort((a,b)=>{
        if(a.order<b.order){
            return -1;
        }
        if(a.order>b.order){
            return 1;
        }
        return 0;
    });
    console.log('dndSortedItemOrders',sortedItemOrders);
    for (let index in sortedItemOrders) {        
        const itemOrder = sortedItemOrders[index];
        res[index] = items.find((item) => (item.id == itemOrder.itemId));        
        res[index].order = itemOrder.order;
    }
    console.log('dndItems',items,res);
    return res;
}

export const filterItems = (items,filters)=>{
    console.log('filterItems',items,filters);
    console.log('name',filters.hasOwnProperty('name'),filters.name!==null)
    if(filters.hasOwnProperty('name') && filters.name!==null){
       
        items = items.slice().filter(item => item.name.indexOf(filters.name) > -1)
    }    
    if(filters.hasOwnProperty('isRead') && filters.isRead!==null){
        items = items.slice().filter(item => item.isRead===filters.isRead);
    }
    console.log('filterItemsAfter',items);
    return items;
}

export const getColumnSortedItems = (items, columnName, direction) => {

    const sorted =  items.slice().sort((a, b) => {
        if (a[columnName] === b[columnName]) {
            return 0;
        }
    
        if (a[columnName] < b[columnName]) {
            return (direction === 'ASC') ? -1 : 1;
        }
        if (a[columnName] > b[columnName]) {
            return (direction === 'ASC') ? 1 : -1;
        }

    })
     
    return sorted;
}
