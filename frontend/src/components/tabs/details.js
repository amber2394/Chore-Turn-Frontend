import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Household from '../../routes/household';
import axios from 'axios';
import style from '../../routes/household/style'


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { households: [] }
    console.log("LOOK HERE" ,this.state)
    }

    componentDidMount(){
     axios.get('http://localhost:3000/households')
     .then(function(response){
         this.setState({households: response.data})
      }.bind(this))
       .catch(function(xhr) {
        alert("couldn't get the households listed!");
      })
   }

	render() {
			return (
				<div class={style.newhousehold}>
					<h6><Household household="DBC House" /></h6>
          <div>
          <br />
            {this.state.households.map( (household) => {
              return (
                <div>
                {household.address},
                <br />
                {household.city},
                <br />
                {household.state},
                <br />
                {household.zip_code}
                <br />
                <br />
                </div>
              )
            })}
          </div>
				</div>
			)
	}
}

export default Details;
