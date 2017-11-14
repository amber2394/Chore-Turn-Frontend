import { h, Component } from 'preact';


import { Link } from 'preact-router/match';

class Login extends Component {

  handleClick = (e) => {
    e.preventDefault();
    // debugger
    var url = 'http://localhost:3000/login',
      data = JSON.stringify({
        user: {
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
      .then( jsonRes => {
        if (jsonRes.errors) {
          console.log(jsonRes)
        } else {
          sessionStorage.id = jsonRes.id
          sessionStorage.created_at = jsonRes.created_at
          sessionStorage.email = jsonRes.email
          sessionStorage.first_name = jsonRes.first_name
          sessionStorage.last_name = jsonRes.last_name
          sessionStorage.password_digest = jsonRes.password_digest
          sessionStorage.updated_at = jsonRes.updated_at
          sessionStorage.username = jsonRes.username


          window.location = '/'
        }
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="log-in">
        <br></br>
        <br/>
        <h2>Log In</h2>
        <br/>
        <input type="submit" value="Log in with Facebook"/>
        <p> -OR- </p>
        <form onSubmit={this.handleClick} method="get">
        <ul>
          <li> Email: <input ref={a => this.email = a} type="text" name="email"/> </li> <br/>
          <li> Password: <input ref={b => this.password = b} type="password" name="password"/> </li> <br/>
          <input type="submit" value="Log In"/>
          <br></br>
            <Link activeClassName="password" href="/signup/">Forgot Your Password?</Link>

        </ul>
      </form>

     </div>
    );
  }
}

export default Login;
