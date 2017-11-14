import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import SignIn from '../SignIn';
import CurrentUser from '../CurrentUser';
import { auth, database } from '../firebase';

// import gravatarUrl from "gravatar-url";


export default class Header extends Component {
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
			const currentUser = this.state;

			return (
				<section>
					{!currentUser && <SignIn />}
					{currentUser &&
											<section>
												<CurrentUser user={currentUser} />
											</section>}
				</section>
			);
		}



	render() {
		if(sessionStorage.id){
			return (
				<header class={style.header}>

					<Link activeClassName={style.active} href="/"><h1>Chore-turn</h1></Link>

					<nav>
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/profile">Me!</Link>
						<Link activeClassName={style.active} href="/household">Add Household</Link>
						<Link activeClassName={style.active} href="/logout">Logout</Link>

						{/* <Image avatar src={gravatarUrl(user.email)} /> */}

					</nav>
				</header>
			)
		}
		return (
			<header class={style.header}>

				<Link activeClassName={style.active} href="/"><h1>Chore-turn</h1></Link>

				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/login">Log In</Link>
					<Link activeClassName={style.active} href="/signup">Sign Up</Link>
					<Link activeClassName={style.active} href="/profile">Me!</Link>
				</nav>
			</header>

		);
	}
}
