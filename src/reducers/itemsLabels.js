const itemLabels = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM_LABEL':
            return [...state,
            { id: new Date().getTime(), ...action.payload }
            ];
        default:
            return state;
    }
}

export default itemLabels;