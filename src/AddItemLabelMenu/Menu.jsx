import React, { Component } from 'react';
import { List, Col, Badge, Row, Popover, Button, Menu, Dropdown } from 'antd';
import { Icon } from 'react-fa';

const LabelsMenu = (props) => {
    const menu = (
        <Menu
            onClick={
                (e) => {
                    props.addItemLabel(props.itemId, e.key)
                }
            }>
            {props.labels.map(
                (label) => (
                    <Menu.Item key={label.id}>
                        <Row>
                            <Col span={8}>
                                <Icon
                                    name="tag"
                                    style={
                                        {
                                            "color": label.color,                                            
                                        }
                                    }
                                >
                                </Icon>
                            </Col>
                            <Col span={16}>
                                {label.name}
                            </Col>
                        </Row>

                        
                    </Menu.Item>
                )
            )}



        </Menu>
    );

    return (<Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
            Add <Icon name="angle-down" />
        </a>
    </Dropdown>);

}
export default LabelsMenu