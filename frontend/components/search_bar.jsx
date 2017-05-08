import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({username: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
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
            value={this.state.username}/>
        </form>
      </div>
    )
  }
};

export default SearchBar;
