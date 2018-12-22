import React, { Component } from 'react';
import Panel from './Panel';
import { connect } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';
import { setFilter,unsetFilter } from '../actions';
 

const mapStateToProps = (state, ownProps) => {     
    return {
        ...state.sortBy,
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        setFilter:(filterName,filterValue) => {
            console.log('setFilterMapDis',filterName,filterValue);
            return (dispatch(setFilter(filterName,filterValue)))
        },
        unsetFilter:(filterName)=>dispatch(unsetFilter(filterName))
    }
);

 
export default connect(
    mapStateToProps,
    mapDispatchToProps
    
)(Panel);