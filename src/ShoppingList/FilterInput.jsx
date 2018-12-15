import React, { Component } from 'react';
import { Input } from 'antd';

const FilterInput = function(props){
    const {onChange} = props;
     
    return (<Input.Search
        placeholder="input search text"
        onSearch={onChange}
        enterButton
    />)

}

export default FilterInput;