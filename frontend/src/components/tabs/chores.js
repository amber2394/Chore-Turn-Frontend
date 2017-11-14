import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Household from '../../routes/household';
import axios from 'axios';

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
      <div>
        <Household household="DBC House" />
        <div>
          <h2> Your list of Chores </h2>
          {this.state.chores.map( (chore) => {
            return (
              <div>
              {chore.name}
              <br />
              {chore.duration}
              {chore.status}
              <br />
              {chore.date}
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
