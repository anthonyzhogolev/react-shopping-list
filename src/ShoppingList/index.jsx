import React, { Component } from 'react';
import {List} from 'antd';
import ShoppingListItem from '../ShoppingListItem';

const ShoppingList = (props)=>{
    
    const {items} = props;
    return(
    <List
        header={<div>Header</div>}
        
        bordered
        dataSource={items}
        renderItem={item => (
            <ShoppingListItem 
                name={item.name}
                sum={item.sum}
                labels={[]}
            />
        )}
    />)
}

export default ShoppingList;