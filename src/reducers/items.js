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

export const getDndSortedItems = (items, params) => {

    const res = [];
    for (let itemOrder of params) {
        res[itemOrder.order] = items.find((item) => (item.id == itemOrder.itemId));
        res[itemOrder.order].order = itemOrder.order
    }

    return res;
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
    console.log('sortingColumn',sorted);
    return sorted;
}
