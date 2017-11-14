import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		if(!sessionStorage.id) {
			return (
				<div class={style.home}>
					<h1>Welcome to Chore Turn!</h1>
					<h2>Please log in to continue</h2>
				</div>
			)
		}
		return (
			<div class={style.home}>
				<h1>Welcome to Chore Turn!</h1>
	    </div>
		);
	}
}
