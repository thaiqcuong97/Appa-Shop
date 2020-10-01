import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

import { ButtonSelect } from '../../ButtonSelect';
// import { routes } from '../../../constants';

const { Option } = Select;

const optionEnglish = ['English', 'Francais', 'Italiano']

const optionUSD = ['Dollar (USD)', 'Euro (EUR)']

function TopBar() {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);

  const handleCancel = () => setVisible(false);


  return (
    <section className="top-bar">
      <div className="grid wide container">
        <div className="row -row">
          <div className="top-bar_translate">
            <div className="row ">
              <div className="top-bar_translate--change-language">
                <ButtonSelect defaultValue="English" dropdownMatchSelectWidth={150}>
                  {optionEnglish.map((item, index) => (
                    <Option key={index} value={item}>{item}</Option>
                  ))}
                </ButtonSelect>
              </div>
              <div className="top-bar_translate--change-currency">
                <ButtonSelect defaultValue="USD" dropdownMatchSelectWidth={160}>
                  {optionUSD.map((item, index) => (
                    <Option key={index} value={item}>{item}</Option>
                  ))}
                </ButtonSelect>
              </div>
            </div>
          </div>
          <div className="top-bar__use">
            <div className="row">
              <div className="top-bar__use--shopping-cart">
                <Link to="" className="my-cart">
                  <FontAwesomeIcon icon={faUser} />
                  My Account
                </Link>
              </div>
              <div className="top-bar__use--my-wishlist ">
                <Link to="" className="tini-wishlist">
                  <FontAwesomeIcon icon={faHeart} />
                  Wishlist
                </Link>
              </div>
              <div className="top-bar__use--my-account ">
                <Button
                  type="primary"
                  onClick={showModal}
                >
                  <FontAwesomeIcon icon={faSignInAlt} />
                  Login/ Register
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

