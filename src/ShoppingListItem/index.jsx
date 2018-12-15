import React, { Component } from 'react';
import {Row,Col,Badge} from 'antd';

const ShoppingListItem = (props)=>{
    
    const {name,sum,labels} = props;
    return(
    <Row type="flex" >
        <Col span={12}>
            {props.name}
        </Col>
        <Col span={8}>
            
        </Col>
        <Col span={4}>
            {props.sum}
        </Col>
    </Row>);
}

export default ShoppingListItem;