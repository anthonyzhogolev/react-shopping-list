export const chageOrder = (id, order) => {
    
    return ({ type: "CHANGE_ORDER", payload: { id: id, order: order } })
}

export const addItem = (id, name, qty, isRead = false) => {
    return ({ type: "ADD_ITEM", payload: { id, name, qty, isRead } })
}

export const addItemOrder = (itemId) => {
    return ({ type: "ADD_ITEM_ORDER", payload: { itemId } })
}

export const deleteItem = (id) => {
    return ({ type: "DELETE_ITEM", payload: { id } });
}

export const markAsReadItem = (id) => {
    return ({ type: "MARK_AS_READ_ITEM", payload: { id } });
}

export const deleteItemOrder = (itemId) => {
    return ({ type: "DELETE_ITEM_ORDER", payload: { itemId } });
}

 

export const changeSortBy = (columnName,direction) => {
    return ({ type: "CHANGE_SORT_BY",payload:{columnName,direction}});
}

export const setFilter = (filterName,filterValue) => {
    
    return ({type:"SET_FILTER",payload:{"filterName":filterName,"filterValue":filterValue}});
}
export const unsetFilter = (filterName,filterValue) => {
    return ({type:"UNSET_FILTER",payload:{"filterName":filterName}});
}