const initialState={
    items:[
        {
            id:1,
            name:'Item1',
            qty:1,
            isReaded:false
        },
        {
            id:2,
            name:'Item2',
            qty:2,
            isReaded:false
        },
        {
            id:3,
            name:'Item3',
            qty:3,
            isReaded:false
        },
    ],
    itemOrders:[
        {itemId:1,order:2},
        {itemId:2,order:1},
        {itemId:3,order:0},
    ],


}

export default initialState;