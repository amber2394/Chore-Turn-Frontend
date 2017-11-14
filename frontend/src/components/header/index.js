import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
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
