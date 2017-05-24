import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", active: false};
    this.update = this.update.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
  }

  update(e) {
    e.preventDefault();
    if(e.target.value === "") {
      this.clearQuery();
      this.props.removeUsers();
      this.setState({active: false});
    } else {
      this.setState({query: e.target.value, active: true},
        () => this.props.fetchUsers(this.state.query));
    }
  }

  renderUsers() {
    if (this.state.query !== "") {
      return this.props.users.map(user => {
        return (
          <li className= 'user-li' key={user.id}>
            <img src={user.profile_pic_url}/>
            <span>{user.username}</span>
          </li>
        )
      });
    }
  }

  clearQuery() {
    this.setState({query: ""});
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
        <div className='users-list-div'>
          <ul className='users-list'>
            {this.renderUsers()}
          </ul>
        </div>
      </div>
    )
  }
};

export default SearchBar;
