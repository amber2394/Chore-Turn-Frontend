import { h, Component } from 'preact';
import PropTypes from "prop-types";
import axios from 'axios';

export default class SearchUserForm extends Component {
    state = {
      query: "",
      loading: false,
      options: [],
      users: {}
    };

    onSearchChange = (e, data) => {
      clearTimeout(this.timer);
      this.setState({
        query: data
      });
      this.timer = setTimeout(this.fetchOptions, 1000);
    };

    onChange = (e, data) => {
      this.setState({ query: data.value });
      this.props.onUserSelect(this.state.users[data.value]);
    };

    fetchOptions = () => {
      if (!this.state.query) return;
      this.setState({ loading: true });
      axios
        .get(`http://localhost:3000/users/search?q=${this.state.query}`)
        .then(res => res.data.users)
        .then(users => {
          const options = [];
          const usersHash = {};
          users.forEach(user => {
            usersHash[user.id = user;
            options.push({
              key: user.id,
              value: user.id,
              text: user.name
            });
          });
          this.setState({ loading: false, options, users: usersHash });
        });
    };

    render() {
      return (
        <Form>
          <Dropdown
            search
            fluid
            placeholder="Search for a user by name"
            value={this.state.query}
            onSearchChange={this.onSearchChange}
            options={this.state.options}
            loading={this.state.loading}
            onChange={this.onChange}
          />
        </Form>
      );
    }
  }

  SearchUserForm.propTypes = {
    onUserSelect: PropTypes.func.isRequired
  };







}
