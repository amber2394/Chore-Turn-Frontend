import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { auth, database } from '../../components/firebase';
import SignIn from '../../components/SignIn';
import CurrentUser from '../../components/CurrentUser';

export default class Home extends Component {

	render() {
		if(!sessionStorage.id) {
			return (
				<div class={style.home}>
					<h2>Let your messy roommate know their reckoning is coming!</h2>
					<h4>Chore turn is an app designed by clean folk who are tired of being passive aggressive</h4>
					<p>This app will do all the work for you!
					Create a household and add your roommates to it.
					No longer will you have to leave your roommates notes on the refridgator letting them know you have had enough</p>
					<h4><Link href="/signup">Sign up</Link> or <Link href="/login">Login</Link> to continue!</h4>
				</div>
			)
		}
	}
}
