import { h, Component } from 'preact';
// import style from './style';

export default class AddChore extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		var url = 'http://localhost:3000/households/' + this.props.household_id + '/chores',
			data = JSON.stringify({
				chore: {
					// user_id: sessionStorage.id,
					// household_id: this.props.household_id,
					name: this.name.value,
					duration: this.duration.value,
					// status: this.status.value,
					date: this.date.value,
				}
			});

		fetch(url,{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: data
		})
		.then( res => res.json())
		.then( jsonRes => window.location = "/household")
		.catch( err => console.log(err))
	}

	render() {
		return (
			<div className= "addchore" >
        <br></br>
        <br></br>
				<h1>Add Chores to your household</h1>
				<br></br>
				<p>Your added members will receive an invitation email to household [household_name] shortly.</p>
				<p>In the meantime, try adding a few chores to your household.</p>
				{/* <input type="submit" value="Add Chores"/> */}
				<br></br>
				<form onSubmit={this.handleSubmit} method="get">
					<h3>Add Chore</h3>
				<ul>
					<li>Chore: <input ref={a => this.name = a} type="text"/></li>
					<li>Duration: <input ref={b => this.duration = b} type="number"/> Minutes</li>
					{/* <li>Status: <input ref={c => this.status = c} type="radio"/></li> */}
					<li>Due Date: <input ref={c => this.date = c} type="date"/></li>
					<input type="submit" value="Add Chore" />
				</ul>
				</form>
				<br></br>
				<input type="submit" value="Back"/>
	    </div>
		);
  }
}
