import { h, Component } from 'preact';
// import $ from 'jquery';
import axios from 'axios';
import Textfield from 'preact-material-components/Textfield';
import 'preact-material-components/Textfield/style.css';
import style from './style';

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

        // <div>
        //   <Textfield default={true} label="Textarea tag"/>
        // </div>
        <div class={style.signup}>
          <div className="sign-up">
            <br></br>
            <br/>
            <h2>Sign Up</h2>
            <br/>
            <form onSubmit={this.handleClick} method="get">
               First name: <input ref={a => this.firstName = a} type="text"/><br/>
               Last name: <input ref={b => this.lastName = b} type="text"/><br/>
               Username: <input ref={ c => this.userName = c} type="text"/><br/>
               Email: <input ref={d => this.email = d} type="text"/><br/>
               Password: <input ref={e => this.password = e} type="password"/><br/>
              <input type="submit" value="Sign Up"/>
            </form>
          </div>
        </div>
      )
    }
}

export default Signup;
