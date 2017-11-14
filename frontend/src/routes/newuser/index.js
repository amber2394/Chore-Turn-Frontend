import { h, Component } from 'preact';
// import style from './style';

export default class Newuser extends Component {
	render() {
		return (
			<div className= "newuser" >
				<h1>Welcome to Chore Turn!</h1>
	        <br/>
	        <h3>Create a houshold to get started!</h3>
	        <br/>
	        <form action="/action_page.php" method="get">
	        <ul>
	          <li> Household Name: <input type="text" name="name"/> </li> <br/>
						<li> Address: <input type="text" name="address"/> </li> <br/>
	          <li> City: <input type="text" name="city"/> </li> <br/>
						<li> State: <input type="text" name="state"/> </li> <br/>
						<li> Zip Code: <input type="text" name="zip_code"/> </li> <br/>
	        <input type="submit" value="Next"/>
	        </ul>
	        </form>
	      </div>
		);
	}
}
