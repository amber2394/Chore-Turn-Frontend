import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Household from '../../routes/household';
import axios from 'axios';
import style from '../../routes/household/style'

class Chores extends Component {
  constructor(props) {
    super(props);
    this.state = { chores: [] }
    console.log("LOOK HERE" ,this.state)
  }

  componentDidMount(){
    axios.get('http://localhost:3000/households/:household_id/chores')
    .then(function(response){
      this.setState({chores: response.data})
    }.bind(this))
    .catch(function(xhr) {
      alert("couldn't get the chores listed!");
    })
  }
  render() {
    return (
      <div class={style.newhousehold}>
        <h6><Household household="DBC House" /></h6>
        <div>
        <br />
          {this.state.chores.map( (chore) => {
            return (
              <div>
              Chore: {chore.name}
              <br />
              Duration: {chore.duration} minutes
              {chore.status}
              <br />
              Date Due: {chore.date}
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

export default Chores;
