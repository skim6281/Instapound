import React from 'react';
import UserRow from './user_row';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
  }

  clearQuery() {
    this.setState({query: ""});
  }

  update(e) {
    e.preventDefault();
    if(e.target.value === "") {
      this.props.removeUsers();
      this.clearQuery();
    } else {
      this.setState({query: e.target.value},
        () => this.props.fetchUsers(this.state.query));
    }
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <UserRow
          clearQuery = {this.clearQuery}
          id = {user.id}
          username = {user.username}
          name = {user.name}
          profilePicUrl = {user.profile_pic_url} />
      )
    });
  }

  renderUsersList() {
    if (this.state.query !== "") {
      return (
        <div className='query-result'>
          <div className='arrow'></div>
          <div className='users-list-div'>
            <ul className='users-list'>
              {this.renderUsers()}
            </ul>
          </div>
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
