import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Household from '../../routes/household';
import axios from 'axios';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
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
          <Link activeClassName={style.active} href="/addchore/:household_id">Add Chore</Link>
        <br />
          {this.state.chores.map( (chore) => {
            return (
              <div>
              <br />
                <Card style={{backgroundColor: '#5CD1CB'}}>
                <div class={style.dashboard}>
                  <Card.Primary>
                    <Card.Title style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                    <div class={style.title}>
                      {chore.name}
                      </div>
                    </Card.Title>
                  </Card.Primary>
                     <Card.Subtitle style={{color: 'black', textAlign: 'center'}}>
                      Duration: {chore.duration} minutes
                      <br />
                      Due Date: {chore.date}
                    </Card.Subtitle>
                    </div>
                </Card>
                <br/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Chores;
