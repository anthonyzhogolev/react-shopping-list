import React, { Component } from 'react';
import Menu from './Menu';
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';
import {addItemLabel } from '../actions';

 

const mapStateToProps = (state, ownProps) => {     
    return {
        labels:state.labels,

    }
}

const mapDispatchToProps = (dispatch) => (
    {
        addItemLabel:(itemId,labelId)=>dispatch(addItemLabel(itemId,labelId))
    }
);

 
export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(Menu);