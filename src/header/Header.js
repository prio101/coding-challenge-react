import React, { Component } from 'react' ;
import '../header/header.css';

class Header extends Component {
  render(){
    return(
      <div className="header-bar">
        <div className="header-title">
          <h2 className="title">IMDB top 100 movie chart</h2>
          <small className="title-sub">React Js Coding Challenge</small>
        </div>
        <div className="header-links">
          <ul className="header-ul-links">
            <li className="header-single-link">
              <a
              href={`https://github.com/prio101/coding-challenge-react`}
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
