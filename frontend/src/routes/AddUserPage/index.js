import { h, Component } from 'preact';
// import SearchUserForm from "./SearchUserForm";
import axios from 'axios';
import Members from '../../components/tabs/members';
import User from '../../components/tabs/user';
import FindUser from '../../components/tabs/finduser';

// export default class AddUserPage extends Component {
//
//   state = {
//     user: null
//   };
//
//   onUserSelect = user => {
//      this.setState({ user});
//      axios
//        .get(`http://localhost:3000/users`)
//        .then(res => res.json())
//        .then(members => this.setState({ user: { ...user, members } }));
//    };
//
//    addUser = user =>
//     this.props
//       .createUser(user)
//       .then(() => this.props.history.push("/dashboard"));
//
//
//       render() {
//           return (
//             <Segment>
//               <h1>Search for a member to add to your household</h1>
//               <SearchUserForm onUserSelect={this.onUserSelect} />
//
//               {this.state.user && (
//                 <UserForm submit={this.addUser} user={this.state.user} />
//               )}
//             </Segment>
//           );
//
//
// NewBookPage.propTypes = {
//   createUser: PropTypes.func.isRequired,
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired
//   }).isRequired
//   };
// }
// }







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
    let id = Math.floor((Math.random()* 100 + 1));
    this.setState({
      users: this.state.users.concat({id, first_name})
    });
    this.first_name = ''
  }

  render() {
    console.log('state', this.state)
    let filteredUsers = this.state.users.filter(
      (user) => {
          return user.first_name.toLowerCase().indexOf(this.state.search.toLowerCase());
      }
    );

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

ReactDOM.render(<AddUserPage users={users} />, document.getElementById('container'));
