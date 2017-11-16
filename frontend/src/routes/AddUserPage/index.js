import { h, Component } from 'preact';
import axios from 'axios';
import Members from '../../components/tabs/members';

export default class AddUserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: []
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 50)
    });
  }

  componentDidMount(){
   axios.get('http://localhost:3000/users')
   .then(function(response){
       this.setState({users: response.data})
    }.bind(this))
     .catch(function(xhr) {
      // alert("No users!");
    })
 }

  addUser(event) {
    event.preventDefault();
    let first_name = this.first_name;
    // let id = Math.floor((Math.random()* 100 + 1));
    this.setState({
      users: this.state.users.concat({first_name})
    });
    this.refs.first_name = ''
  }

  render() {
    console.log('state', this.state)
    let filteredUsers = this.state.users.find(
      (user) => {
          return user.first_name.toLowerCase() == this.state.search.toLowerCase();
      }
    );
    if (filteredUsers === undefined) {
      filteredUsers = {first_name: ""};
    }

console.log('f', filteredUsers)

    return (
      <div>
        <input type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
        <form onSubmit={this.addUser.bind(this)}>
          <input type="text" ref={a => this.first_name = a} />
          <button type="submit" >  Add New User </button>
        </form>
        <ul>
        {filteredUsers.first_name}
        </ul>
      </div>
    )
  }
}

// ReactDOM.render(<AddUserPage users={users} />, document.getElementById('container'));
