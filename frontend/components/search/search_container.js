import { connect } from 'react-redux';
import { fetchUsers, removeUsers } from '../../actions/user_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return({
    users: state.search.users
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUsers: (userName) => dispatch(fetchUsers(userName)),
    removeUsers: () => dispatch(removeUsers())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
