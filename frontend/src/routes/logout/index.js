import { h, Component } from 'preact';


import { Link } from 'preact-router/match';

class Logout extends Component {
  render() {
    sessionStorage.clear();
    window.location = '/'
    return (
      <h1> You have been succesfully logged out! </h1>


    )
  }

}
export default Logout;
