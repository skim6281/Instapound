import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    if(e.target.value === "") {
      this.props.removeUsers();
      this.setState({query: ""});
    } else {
      this.setState({query: e.target.value},
        () => this.props.fetchUsers(this.state.query));
    }
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li className= 'user-li' key={user.id}>
          <img src={user.profile_pic_url}/>
          <span>{user.username}</span>
        </li>
      )
    });
  }

  renderUsersList() {
    if (this.state.query !== "") {
      return (
        <div className='users-list-div'>
          <ul className='users-list'>
            {this.renderUsers()}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='box'>
        <form className='container' autoComplete="off">
          <span className='search-icon'><i className="fa fa-search"></i></span>
          <input
            id='search'
            placeholder="Search"
            onChange={this.update}
            value={this.state.query}/>
        </form>
        {this.renderUsersList()}
      </div>
    )
  }
};

export default SearchBar;
