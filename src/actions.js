export const chageOrder = (id,order)=>{
    console.log('actionChangeOrder',id,order);
    return ({type:"CHANGE_ORDER",payload:{id:id,order:order}})
}

export const addItem = (id,name,qty) => {
    return ({type:"ADD_ITEM",payload:{id,name,qty}})
}

export const addItemOrder = (itemId)=>{
    return ({type:"ADD_ITEM_ORDER",payload:{itemId}})
}

export const deleteItem = (id)=>{
    return ({type:"DELETE_ITEM",payload:{id}});
}

export const markAsReadItem = (id)=>{
    return ({type:"MARK_AS_READ_ITEM",payload:{id}});
}

export const deleteItemOrder = (itemId)=>{
    return ({type:"DELETE_ITEM_ORDER",payload:{itemId}});
}