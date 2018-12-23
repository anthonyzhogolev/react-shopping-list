import React, { Component } from 'react';
import { Col, Badge, Row } from 'antd';
import { Icon } from 'react-fa'

const SortingPanel = (props) => {

    return (
        <Row  >
            <Col span={8} onClick={() => { props.clickHandle('name') }} >

                <b style={{ "padding-right": "10px" }}>Name</b>
                <Icon name="sort" />

            </Col>
            <Col span={8} onClick={() => props.clickHandle('qty')}>
                <b>Qty</b>
                <Icon name="sort" />
            </Col>

            <Col span={4}>
                <b>isRead</b>
            </Col>

            <Col span={4}>
                <b>Labels</b>
            </Col>
        </Row>
    );
}

export default SortingPanel;