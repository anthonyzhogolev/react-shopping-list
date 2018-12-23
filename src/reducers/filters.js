
const filters = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTER':
            const { filterName, filterValue } = action.payload;
            return Object.assign({}, state, { [filterName]: filterValue });
        case 'UNSET_FILTER':            
            return Object.assign({}, state, { [action.payload.filterName]: null });
        default:
            return state;
    }
    return state;
}

export default filters;