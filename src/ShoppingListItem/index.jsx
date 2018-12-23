import React, { Component } from 'react';
import { List, Col, Badge, Row, Popover, Button, Menu, Dropdown } from 'antd';
import { Icon } from 'react-fa'
import AddItemLabelMenu from '../AddItemLabelMenu';
import styled from 'styled-components';

const StyledListItem = styled(List.Item)`
    border: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8!important;
    margin: 20px;
    background-color:#fff
`;

const ShoppingListItem = (props) => {

    // const {name,sum,labels} = props;

    return (
        <StyledListItem>
             
            <Col span={8} >
                {props.name} -
            </Col>

            <Col span={4} >
                {props.qty}
            </Col>

            <Col span={4}>
                {props.isRead ? "isRead" : "No"}
            </Col>

            <Col span={8}>
                {props.labels.map(label => (
                    <div><Icon name="tag" style={{ "color": label.color }}></Icon>{label.name}</div>
                ))}
                <AddItemLabelMenu itemId={props.id} />
            </Col>

        </StyledListItem>
    );
}

export default ShoppingListItem;