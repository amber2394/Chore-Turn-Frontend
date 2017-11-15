import { h, Component } from 'preact';
import { auth, googleAuthProvider } from '../firebase';

export default class SignIn extends Component {
	constructor(props){
		super(props)
		this.state = {
			loggin: false
		}
	}
	render() {
		return (
			<section>
				<h1>Chore-Turn</h1>
				<button onClick={() => auth.signInWithRedirect(googleAuthProvider)}>
          Sign In
				</button>
			</section>
		);
	}
}
