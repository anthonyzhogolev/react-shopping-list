import React, { Component } from 'react';
import SortingPanel from './Panel';
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';
import { changeSortBy } from '../actions';
 

const mapStateToProps = (state, ownProps) => {
    
    
    return {
        ...state.sortBy,
    }
}

const mergeProps = (stateProps,dispatchProps) => {
    const {currentColumnName,currentDirection}  = stateProps;
    const {dispatch} = dispatchProps;
    return {
        clickHandle: (columnName) =>{
             
            if(stateProps.columnName==columnName){
                 
                dispatch(changeSortBy(columnName,(stateProps.direction==='ASC')?'DESC':'ASC'));
            } else {
                dispatch(changeSortBy(columnName,'ASC'));
            }            
        }
    }
}

 
export default connect(
    mapStateToProps,
    null,
    mergeProps
)(SortingPanel);