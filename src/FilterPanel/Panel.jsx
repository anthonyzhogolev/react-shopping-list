import React, { Component } from 'react';
import { Col, Badge, Row, Icon, Radio } from 'antd';
import SearchInput from './SearchInput';

const FilterPanel = (props) => {
    const {setFilter,unsetFilter} = props;
    return (
        <Row justify="start">
            <Col span={6}>
                <SearchInput filterName='name' onChange={(value) => setFilter('name', value)} />
            </Col>
            <Col span={6}>

            </Col>

            <Radio.Group
                defaultValue="all"
                buttonStyle="solid"
                onChange={(e) => {
                    
                    switch(e.target.value){                        
                        case 'all':
                            return unsetFilter('isRead');
                        case 'read':
                            return setFilter('isRead',true);
                        case 'not-yet-read':
                            return setFilter('isRead',false);
                        default:
                            return;
                    }
                }}>
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="read">Read</Radio.Button>
                <Radio.Button value="not-yet-read">Not yet read</Radio.Button>
            </Radio.Group>

        </Row>
    );
}

export default FilterPanel;