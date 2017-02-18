import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
  }

  render() {
    return (
      <div>
        <article>
          <header>

          </header>
          <section>

          </section>
        </article>
      </div>
    );
  }
}

export default Profile;
