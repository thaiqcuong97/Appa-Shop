import React from 'react';
import { Link } from 'react-router-dom';
import { Select, Badge } from "antd";

import logo from '../../../assets/image/logo.png';
import iconShipping from '../../../assets/image/bag.svg'
import routes from '../../../constants';
import { InputCustom } from '../../InputCustom';

const { Option } = Select;

function TopBarContent({ SearchList }: any) {
  return (
    <section className="top-bar-content">
      <div className="grid wide container">
        <div className="-col">
          <div className="top-bar-content__logo">
            <Link to={routes.HOME}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="top-bar-content__search">
            <InputCustom defaultValue={SearchList[0]} width={180}>
              {SearchList.map((item: string, index: number) => (
                <Option key={index} value={item}>{item}</Option>
              ))}
            </InputCustom>
          </div>
          <div className="top-bar-content__cart">
            <Link to="">
              <Badge count={0}>
                <img src={iconShipping} alt="shopping" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
}

export default TopBarContent;

