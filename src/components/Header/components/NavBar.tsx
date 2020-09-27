import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const iconNav = [faTwitter, faFacebookF, faGooglePlusG, faLinkedinIn];

function TopNav({ routes }: any) {

  const MenuItem = routes.MenuItem;


  /*
  const renderMenuMin = () => {

    return (

    )
  }

  const renderMenuMax = () => {
    return (

    );
  }
 */
  return (
    <nav className="top-nav">
      <div className="grid wide container">
        <div className="top-nav__content">
          <div className="top-nav__content--nav-menu">
            <ul className='nav-menu' >
              <FontAwesomeIcon icon={faTimes} />
              <li>
                <NavLink

                  className="mg-20"
                  exact
                  to={routes.HOME}>
                  Home
                  </NavLink>
              </li>
              <li><NavLink to={routes.PRODUCT}>Product</NavLink></li>
              <li
                className="nav-menu__dropdown"
              >
                <NavLink to={routes.CATALOG}>
                  Catalog
                </NavLink>
                <ul className=" sub-categories ">
                  {MenuItem.map((item: any, index: number) => (
                    <li key={index} className="sub-categories__content ">
                      <h3 > {item[0]} </h3>
                      <ul className="sub-categories__content--option" >
                        {item && item.map((option: any, index: number) => (
                          <li key={index} className={option.cName}>
                            <Link to={option.url}>{option.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))
                  }
                </ul >
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
    </nav >
  );
}

export default TopNav;

