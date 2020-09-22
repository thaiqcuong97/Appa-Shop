import React, { useState } from 'react';
import { Input, Select } from "antd";
import "antd/dist/antd.css";

import './Input.scss';

export const InputCustom = ({
  defaultValue, children, width
}: any) => {
  const [, setSearch] = useState("");

  const getSearch = (e: any) => {
    setSearch(e.target.value);
  }

  return (
    <Input.Group compact>
      <Select defaultValue={defaultValue} dropdownMatchSelectWidth={width} bordered={false}>
        {children}
      </Select>
      <Input
        placeholder="Search..."
        onChange={getSearch}
        style={{ width: 200 }}
      />
    </Input.Group>
  )
};