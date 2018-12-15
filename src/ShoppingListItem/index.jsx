import React, { Component } from 'react';
import {Row,Col,Badge,List} from 'antd';

const ShoppingListItem = (props)=>{
    
    const {name,sum,labels} = props;
    return(
        <List.Item>
        <Col span={12}>
            {props.name}
        </Col>
        <Col span={8}>
            
        </Col>
        <Col span={4}>
            {props.sum}
        </Col>
        </List.Item>
     );
}

export default ShoppingListItem;