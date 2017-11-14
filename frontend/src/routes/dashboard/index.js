import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import axios from 'axios';

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
      console.log(household)

      return(
        <div>
          <h2> Your list of Households </h2>
          {this.state.households.map( (household) => {
            return (
              <Link href={`/households/${household.id}`}>{household.name}</Link>
            )
          })}
        </div>
      )
    }
}
