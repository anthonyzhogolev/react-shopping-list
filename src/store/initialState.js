const initialState = {
    items: [
        {
            id: 1,
            name: 'Item1',
            qty: 1,
            isRead: false
        },
        {
            id: 2,
            name: 'Item2',
            qty: 2,
            isRead: false
        },
        {
            id: 3,
            name: 'Item3',
            qty: 3,
            isRead: false
        },
    ],
    itemOrders: [
        { id: 1, itemId: 1, order: 1 },
        { id: 2, itemId: 2, order: 0 },
        { id: 3, itemId: 3, order: 2 },
    ],
    sortBy: {
        columnName: null,
        direction: null
    },
    filters: {
        name: null,
        isRead:null,        
    }

}

export default initialState;