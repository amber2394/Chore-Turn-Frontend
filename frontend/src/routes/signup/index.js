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
        .then( jsonRes => window.location = "/login")
        .catch( err => console.log(err))
    }

    render() {
      return (
        <div className="sign-up">
          <br/>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleClick} method="get">
             <p>First name: <input ref={a => this.firstName = a} type="text"/></p>
             <p>Last name: <input ref={b => this.lastName = b} type="text"/></p>
             <p>Username: <input ref={ c => this.userName = c} type="text"/></p>
             <p>Email: <input ref={d => this.email = d} type="text"/></p>
             <p>Password: <input ref={e => this.password = e} type="password"/></p>
            <input type="submit" value="Sign Up"/>
          </form>
        </div>
      )
    }
}

export default Signup;
