
export default class FindUser extends Component {
  users = [{
    users: {}
  }]

  render() {
    return (
      <div>
        <h2>Users</h2>
        <br />
        <AddUserPage user={this.props.user} />
      </div>
    )
  }
}
