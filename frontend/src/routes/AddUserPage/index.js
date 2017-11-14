import { h, Component } from 'preact';
import SearchUserForm from "./SearchUserForm";
import PropTypes from "prop-types";
import axios from 'axios';

export default class AddUserPage extends Component {

  state = {
    user: null
  };

  onUserSelect = user => {
     this.setState({ user});
     axios
       .get(`http://localhost:3000/users`)
       .then(function(response))
       .then(members => this.setState({ user: { ...user, members } }));
   };

   addUser = user =>
    this.props
      .createUser(user)
      .then(() => this.props.history.push("/dashboard"));


      render() {
          return (
            <Segment>
              <h1>Search for a member to add to your household</h1>
              <SearchUserForm onUserSelect={this.onUserSelect} />

              {this.state.user && (
                <UserForm submit={this.addUser} user={this.state.user} />
              )}
            </Segment>
          );
        }
      }

NewBookPage.propTypes = {
  createUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};







}
