import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import axios from 'axios';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {households: [] }
    console.log(this.state)
    }

    componentDidMount(){
     axios.get('http://localhost:3000/households')
     .then(function(response){
       debugger
         this.setState({households: response.data})
      }.bind(this))
       .catch(function(xhr) {
        alert("couldn't get the households listed!");
      })
   }

    render() {
      let household = this.state.household;
      // console.log(household)
      return(
        <div>
        {this.state.households.map( (household) => {
          return (
            <div>
            <br />
              <Card>
                <Card.Primary>
                  <Card.Title>
                    <Link href={`/households/${household.id}`}>{household.name}</Link>
                  </Card.Title>
                </Card.Primary>
                   <Card.Subtitle>
                    {household.address}
                  </Card.Subtitle>
              </Card>
              <br/>
            </div>
          )
          })}
          </div>




        // <div>
        //   <h2> Your list of Households </h2>
        //   {this.state.households.map( (household) => {
        //     return (
        //       <Link href={`/households/${household.id}`}>{household.name}</Link>
        //     )
        //   })}
        // </div>
      )
    }
}
