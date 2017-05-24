import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchInput: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({username: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderUsers() {
    if (this.state.searchInput !== "") {
      return this.props.users.map(user => {
        return (
          <li key={user.id}>
            <img></img>
            <span>{user.username}</span>
          </li>
        )
      });
    }
  }

  render() {
    return (
      <div className='box'>
        <form onSubmit={this.handleSubmit} className='container'>
          <span className='search-icon'><i className="fa fa-search"></i></span>
          <input
            id='search'
            type='search'
            placeholder="Search"
            onChange={this.update}
            value={this.state.searchInput}/>
          <div>
            <ul>
              {this.renderUsers()}
            </ul>
          </div>
        </form>
      </div>
    )
  }
};

export default SearchBar;
