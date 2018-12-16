import React, { Component } from 'react';
import ShoppingListComponent from './List';
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';
import { getSortedItems } from '../reducers';
import { chageOrder, addItem, addItemOrder } from '../actions';
// export default ShoppingListComponent;


const mapStateToProps = (state, ownProps) => {
    console.log('mapState', state, ownProps);

    return {
        items: getSortedItems(state)
    }
}

 

const mapDispatchToProps = (dispatch) => (
    {
        changeOrder: (id, order) => (dispatch(chageOrder(id, order))),
        addItem: (item) => {
            dispatch(addItem(item.id, item.name, item.qty));
            dispatch(addItemOrder(item.id));
        },
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingListComponent);