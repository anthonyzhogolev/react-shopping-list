import React, { Component } from "react";
import { Col, Badge, Row, Icon, Radio } from "antd";
import SearchInput from "./SearchInput";

function FilterPanel(props) {
  const { setFilter, unsetFilter } = props;
  return (
    <Row>
      <Col span={4}>
        <SearchInput
          filterName="name"
          onChange={value => setFilter("name", value)}
        />
      </Col>

      <Col span={8}>
        <Radio.Group
          defaultValue="all"
          buttonStyle="solid"
          onChange={e => {
            switch (e.target.value) {
              case "all":
                return unsetFilter("isRead");
              case "read":
                return setFilter("isRead", true);
              case "not-yet-read":
                return setFilter("isRead", false);
              default:
                return;
            }
          }}
        >
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="read">Read</Radio.Button>
          <Radio.Button value="not-yet-read">Not yet read</Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  );
}

export default FilterPanel;
