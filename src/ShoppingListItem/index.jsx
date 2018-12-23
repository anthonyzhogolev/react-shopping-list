import React, { Component } from 'react';
import {List,Col,Badge,Row,Popover,Button, Menu, Dropdown} from 'antd';
import { Icon } from 'react-fa'
import AddItemLabelMenu from '../AddItemLabelMenu';
const ShoppingListItem = (props)=>{
    
    // const {name,sum,labels} = props;
 
    return(
        <List.Item>                            

        <Col span={8} >
            {props.name} -             
        </Col>
        
        <Col span={8} >
            {props.qty}
        </Col>

        <Col span={4}>
            {props.isRead?"isRead":"No"}
        </Col>
         
        <Col span={4}>
            {props.labels.map(label=>(
                <div><Icon name="tag" style={{"color":label.color}}></Icon>{label.name}</div>
            ))}
            <AddItemLabelMenu itemId={props.id}/>
        </Col>
        
        </List.Item>
     );
}

export default ShoppingListItem;