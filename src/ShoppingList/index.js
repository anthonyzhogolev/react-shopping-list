import React, { Component } from 'react';
import ShoppingListComponent from './List';
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';
import { getSortedItems,getItems } from '../reducers';
import { chageOrder, addItem, addItemOrder,deleteItem,deleteItemOrder, markAsReadItem,unset, unsetSortBy } from '../actions';
// export default ShoppingListComponent;


const mapStateToProps = (state, ownProps) => {
    
    
    return {
        
        items: getItems(state)
    }
}

 

const mapDispatchToProps = (dispatch) => (
    {
        changeOrder: (id, order) => {
            
            dispatch(chageOrder(id, order))
        },
        unsetSortBy:()=>dispatch(unsetSortBy()),
        addItem: (item) => {
            dispatch(addItem(item.id, item.name, item.qty));
            dispatch(addItemOrder(item.id));
        },
        deleteItem: (id) => {
            dispatch(deleteItemOrder(id));
            dispatch(deleteItem(id))
        },
        markAsReadItem: (id) => {
            dispatch(markAsReadItem(id));
        },

    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingListComponent);