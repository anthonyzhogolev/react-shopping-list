import React, { Component } from 'react';
import {Col,Badge,Row,Icon} from 'antd';
import Carets from './Carets';

const SortingPanel = (props)=>{
    console.log('ShopingListItemProps',props);
    // const {name,sum,labels} = props;
    return(
        <Row justify="start">
            

        <Col span={4} offset={1} onClick={()=>{props.clickHandle('name')}} >
            <Row align='middle'  type="flex" justify="start">
                <Col span={8} offset={2}>
                    <b>Name</b>
                </Col>
                <Col span={2}  >
                    
                </Col>                                                                    
            </Row>
        </Col>
        
        <Col span={4} offset={4} onClick={()=>props.clickHandle('qty')}>
            <b>Qty</b>
        </Col>
         
        </Row>
     );
}

export default SortingPanel;