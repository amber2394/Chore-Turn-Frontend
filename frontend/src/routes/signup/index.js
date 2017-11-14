import { h, Component } from 'preact';
// import $ from 'jquery';
import axios from 'axios';

class Signup extends Component {
    handleClick = (e) => {
      e.preventDefault();
      var url = 'http://localhost:3000/users',
          data= JSON.stringify({
            user: {
              first_name: this.firstName.value,
              last_name: this.lastName.value,
              username: this.userName.value,
              email: this.email.value,
              password: this.password.value,
            }
          });

        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: data
        })
        .then( res => res.json())
        .then( jsonRes => window.location = "/profile")
        .catch( err => console.log(err))
    }

    render() {
      return (
        <div className="sign-up">
          <br></br>
          <br/>
          <h2>Sign Up</h2>
          <br/>
          <form onSubmit={this.handleClick} method="get">
          <ul>
            <li> First name: <input ref={a => this.firstName = a} type="text"/> </li> <br/>
            <li> Last name: <input ref={b => this.lastName = b} type="text"/> </li> <br/>
            <li> Username: <input ref={ c => this.userName = c} type="text"/> </li> <br/>
            <li> Email: <input ref={d => this.email = d} type="text"/> </li> <br/>
            <li> Password: <input ref={e => this.password = e} type="password"/> </li> <br/>
            <input type="submit" value="Sign Up"/>
          </ul>
          </form>
        </div>
      )
    }
}

export default Signup;
