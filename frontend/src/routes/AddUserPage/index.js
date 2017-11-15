import { h, Component } from 'preact';
// import SearchUserForm from "./SearchUserForm";
import axios from 'axios';

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
//        .then(function(response))
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
//         }
//       }
//
// NewBookPage.propTypes = {
//   createUser: PropTypes.func.isRequired,
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired
//   }).isRequired
//   };
// }


// let users = [{
//   users: {}
// }]

// export default class FindUser extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Users</h2>
//         <br />
//         <UserList user={this.props.user} />
//       </div>
//     )
//   }
// }
//
// export default class User extends Component {
//   render() {
//     return (
//       <li>{this.props.contact.name} </li>
//     )
//   }
// }


export default class UserList extends Component {
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
     debugger
       this.setState({users: response.data})
    }.bind(this))
     .catch(function(xhr) {
      // alert("No users!");
    })
 }

  addUser(event) {
    event.preventDefault();
    let name = this.name;
    let id = Math.floor((Math.random()* 100 + 1));
    this.setState({
      users: this.state.users.concat({id, name})
    });
    this.name = ''
  }

  render() {

    let filteredUsers = this.state.users.filter(
      (user) => {
          return user.name.toLowerCase().indexOf(this.state.search.toLowerCase());
      }
    );

    return (
      <div>
        <input type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
        <form onSubmit={this.addUser.bind(this)}>
          <input type="text" ref={a => this.name = a} />
          <button type="submit" >  Add New User </button>
        </form>
        <ul>
        {filteredUsers.map((user) => {
          return <User user={user} key={user.id} />
        })}
        </ul>
      </div>
    )
  }
}

// ReactDOM.render(<UserList users={users} />, document.getElementById('container'));
