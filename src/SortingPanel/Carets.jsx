import React, { Component } from 'react';
import {Col,Badge,Row,Icon,List} from 'antd';

const Carets = (props)=>{
    return (
        <List.Item>
        <Row style={{"line-height":0.5}} justify="start">
                        <Col>
                            <Icon type="caret-up"  theme="filled" />
                        </Col>
                    </Row>
                    <Row style={{"line-height":0.5}}>
                        <Col>
                            <Icon type="caret-down"  theme="filled" />
                        </Col>
                        </Row>
        </List.Item>
         
    );
}

export default Carets;