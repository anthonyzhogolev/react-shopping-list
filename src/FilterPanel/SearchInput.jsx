import React, { Component } from "react";
import { Input } from "antd";

function SearchInput(props) {
  const { onChange } = props;

  return (
    <Input.Search
      placeholder="input search text"
      // onSearch={(value)=>onChange(filterName,value)}
      onSearch={onChange}
      enterButton
    />
  );
}

export default SearchInput;
