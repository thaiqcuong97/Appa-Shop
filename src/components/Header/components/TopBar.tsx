import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

import { ButtonSelect } from '../../ButtonSelect';

const { Option } = Select;

const optionEnglish = ['English', 'Francais', 'Italiano']

const optionUSD = ['Dollar (USD)', 'Euro (EUR)']

function TopBar() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <section className="top-bar">
      <div className="grid wide container">
        <div className="row">
          <div className="col l-6 m-6 c-12">
            <div className="row ">
              <div className="top-bar__change-language">
                <ButtonSelect defaultValue="English" dropdownMatchSelectWidth={150}>
                  {optionEnglish.map((item, index) => (
                    <Option key={index} value={item}>{item}</Option>
                  ))}
                </ButtonSelect>
              </div>
              <div className="top-bar__change-currency">
                <ButtonSelect defaultValue="USD" dropdownMatchSelectWidth={160}>
                  {optionUSD.map((item, index) => (
                    <Option key={index} value={item}>{item}</Option>
                  ))}
                </ButtonSelect>
              </div>
            </div>
          </div>
          <div className="col l-6 m-6 c-12">
            <div className="row -justify-content">
              <div className="top-bar__shopping-cart">
                <Link to="" className="my-cart">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  My cart
                </Link>
              </div>
              <div className="top-bar__my-wishlist ">
                <Link to="" className="tini-wishlist">
                  <FontAwesomeIcon icon={faHeart} />
                  Wishlist
                </Link>
              </div>
              <div className="top-bar__my-account ">
                <Button
                  type="primary"
                  onClick={showModal}
                >
                  <FontAwesomeIcon icon={faUser} />
                  Register / Login
                </Button>
                <Modal visible={visible} onCancel={handleCancel} footer={null}>
                  <p>Form Login</p>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;

