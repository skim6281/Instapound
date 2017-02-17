import React from 'react';


class NavBar extends React.Component{
  render(){
    const {currentUser, logout} = this.props
    return (
      <div className='navbar-container'>
        <div className='nav'>
          <div className='logos'>
            <img className="logo-image" src={window.images.logo}/>
            <img className="logo-text" src={window.images.logoText}/>
          </div>
          <div className='nav-icons'>
            <ul className='icon-list'>
              <li className='icon'></li>
              <li className='logout'>
                <button onClick={logout}>Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

};

export default NavBar;
