import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

import './ButtonSelect.scss';

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

export const ButtonSelect = ({
  children, defaultValue, dropdownMatchSelectWidth
}: any) => {

  return (
    <Select
      defaultValue={defaultValue}
      onChange={handleChange}
      bordered={false}
      listHeight={250}
      dropdownMatchSelectWidth={dropdownMatchSelectWidth}
    >
      {children}
    </Select>
  );
}; 
