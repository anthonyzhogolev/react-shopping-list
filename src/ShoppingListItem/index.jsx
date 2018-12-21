import React, { Component } from 'react';
import {List,Col,Badge,Row} from 'antd';

const ShoppingListItem = (props)=>{
    
    // const {name,sum,labels} = props;
    return(
        <List.Item justify="start">
        
        
            

        <Col span={4} >
            {props.name} - 
            {props.isRead && "isRead"}
        </Col>
        
        <Col span={4} offset={4}>
            {props.qty}
        </Col>
         
        
        
        </List.Item>
     );
}

export default ShoppingListItem;