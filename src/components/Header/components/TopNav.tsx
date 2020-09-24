import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import routes from '../../../constants';

const iconNav = [faTwitter, faFacebookF, faGooglePlusG, faLinkedinIn];

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="grid wide container">
        <div className="top-nav__content">
          <div className="top-nav__content--nav-menu">
            <ul className="nav-menu">
              <li><NavLink className="mg-20" exact to={routes.HOME}>Home</NavLink></li>
              <li><NavLink to={routes.PRODUCT}>Product</NavLink></li>
              <li className="nav-menu__dropdown">
                <span>
                  Catalog
                </span>
                <ul className="sub-categories">
                  <li className="sub-categories__content ">
                    <h3>Men&apos;s </h3>
                    <ul className="sub-categories__content--option">
                      <li className="sub-categories__content--option--item"><Link to="">Accessories</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Luxury</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Sale</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Sports</Link></li>
                    </ul>
                  </li>
                  <li className="sub-categories__content">
                    <h3>Women&apos;s</h3>
                    <ul className="sub-categories__content--option">
                      <li className="sub-categories__content--option--item"><Link to="">Vintage</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Unisex</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Sports</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Ladies</Link></li>
                    </ul>
                  </li>
                  <li className="sub-categories__content">
                    <h3>Kid&apos;s</h3>
                    <ul className="sub-categories__content--option">
                      <li className="sub-categories__content--option--item"><Link to="">Kids’</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Luxury</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Vintage</Link></li>
                      <li className="sub-categories__content--option--item"><Link to="">Unisex</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><NavLink to={routes.BLOG}>Blog</NavLink></li>
              <li><NavLink to={routes.CONTACT}>Contact</NavLink></li>
            </ul>
          </div>
          <div className="top-nav__content--social-network">
            <ul className="social-network__content">
              {iconNav.map((icon, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;

