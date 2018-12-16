import React, { Component } from 'react';
import ShoppingListComponent from './component';
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';
import {getSortedItems} from '../reducers';
// export default ShoppingListComponent;


const mapStateToProps = (state,ownProps) => {
    console.log('mapState',state,ownProps);
    
    return {
        items: getSortedItems(state)
    }
}

const chageOrder = (id,order)=>{
    console.log('actionChangeOrder',id,order);
    return ({type:"CHANGE_ORDER",payload:{id:id,order:order}})
}

const mapDispatchToProps = (dispatch)=>(
    {
        changeOrder:(id,order)=> (dispatch(chageOrder(id,order)))        
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingListComponent);