import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.renderProfileButton = this.renderProfileButton.bind(this);
  }

  renderProfileButton(e) {
    e.preventDefault();
    hashHistory.replace(`${this.props.currentUser.username}`);
  }

  render(){
    const {currentUser, logout} = this.props
    return (
      <div className='navbar-container'>
        <div className='nav'>
          <Link to="/" className='logos'>
            <img className="logo-image" src={window.images.logo}/>
            <img className="logo-text" src={window.images.logoText}/>
          </Link>
          <div className='nav-icons'>
            <ul className='icon-list'>
              <li className='icon'>
                <a className="link" onClick={this.renderProfileButton}>
                  <img src={window.images.navUser}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
