import React, { Component } from 'react';
import SortingPanel from './Panel';
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';
import { changeSortBy } from '../actions';
 

const mapStateToProps = (state, ownProps) => {
    
    console.log('mapStateToProps',{...state.sortBy});
    return {
        ...state.sortBy,
    }
}

const mergeProps = (stateProps,dispatchProps) => {
    const {currentColumnName,currentDirection}  = stateProps;
    const {dispatch} = dispatchProps;
    return {
        clickHandle: (columnName) =>{
            console.log('mergeProps',stateProps);
            if(stateProps.columnName==columnName){
                console.log('mergeProps===');
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