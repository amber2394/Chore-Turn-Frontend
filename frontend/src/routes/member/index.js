import { h, Component } from 'preact';
// import style from './style';
// import Button from 'react-toolbox/button';

export default class AddMember extends Component {
	render() {
		return (
			<div className= "addmember" >
				<br></br>
				<br></br>
				<h1>Add Members to you household!</h1>
	        <ul>
	          <li> Member Email: <input type="text" name="email"/> </li> <br/>
						<li> Member Email: <input type="text" name="email"/> </li> <br/>
						<li> Member Email: <input type="text" name="email"/> </li> <br/>
	          <input type="submit" value="Next"/>
	        </ul>
	    </div>
		);

    // const TestButtons = () => (
    //   <div>
    //     <Button label="Flat button" />
    //     <Button kind="raised" label="Raised" />
    //     <Button kind="raised" label="Raised accent" accent icon="favorite" />
    //     <Button className="primary" kind="floating" icon="add" />
    //     <Button mini kind="floating" icon="add" accent />
    //   </div>
    // );
	}
}
