import React, { Component } from "react";
import { Col, Badge, Row } from "antd";
import { Icon } from "react-fa";

function SortingPanel(props) {
  return (
    <Row
      style={{
        "margin-top": "20px"
      }}
    >
      <Col
        span={8}
        onClick={() => {
          props.clickHandle("name");
        }}
      >
        <b
          style={{
            "padding-right": "10px"
          }}
        >
          Name
        </b>
        <Icon name="sort" />
      </Col>
      <Col span={4} onClick={() => props.clickHandle("qty")}>
        <b
          style={{
            "padding-right": "10px"
          }}
        >
          Qty
        </b>
        <Icon name="sort" />
      </Col>

      <Col span={4}>
        <b>isRead</b>
      </Col>

      <Col span={8}>
        <b>Labels</b>
      </Col>
    </Row>
  );
}

export default SortingPanel;
