import React, { Component } from 'react';
import { Menu } from 'antd';

 const ItemMenu = (props) => (
    <Menu 
        onClick={(e)=>{
            console.log('MenuProps',props);
            if (e.key === 'delete') {
                 props.deleteHandle();
                 
            }
            if(e.key === 'markRead'){
                 props.markAsReadHandle();
            }
        }}
    >
        <Menu.Item key="markRead">Mark As Read</Menu.Item>
        <Menu.Item key="delete">Delete</Menu.Item>
        
    </Menu>
        )
        export default ItemMenu;