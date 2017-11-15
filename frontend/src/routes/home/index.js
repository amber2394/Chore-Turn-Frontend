import { h, Component } from 'preact';
import style from './style';
import { auth, database } from '../../components/firebase';
import SignIn from '../../components/SignIn';
import CurrentUser from '../../components/CurrentUser';

export default class Home extends Component {
	constructor() {
			super();
			this.state = {
				currentUser: null
			};
		}

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
		this.setState({ currentUser });
		});
	}

	render() {
		const { currentUser } = this.state;
		return (
			<section>
				{ currentUser ? <CurrentUser user={currentUser}/> : <SignIn/>}
			</section>
		);
	}
}





// 		if(!sessionStorage.id) {
// 			return (
// 				<div class={style.home}>
// 					<h1>Welcome to Chore Turn!</h1>
// 					<h2>Please log in to continue</h2>
// 				</div>
// 			)
// 		}
//
// 		return (
// 			<div class={style.home}>
// 				<h1>Welcome to Chore Turn!</h1>
// 	    </div>
// 		);
// 	}
// }
