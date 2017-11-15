import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import axios from 'axios';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';



export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {households: [] }
    console.log(this.state)
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
      let household = this.state.household;
      // console.log(household)
      return(
        <div class={style.body}>
        <h2 style={{color: '#777777'}}> Your Households: </h2>
        {this.state.households.map( (household) => {
          return (
            <div>
            <br />
              <Card>
              <div class={style.dashboard}>
                <Card.Primary>
                  <Card.Title>
                  <div class={style.title}>
                    <Link href={`/household/${household.id}/details`} style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>{household.name}</Link>
                    </div>
                  </Card.Title>
                </Card.Primary>
                   <Card.Subtitle style={{color: 'white', textAlign: 'center'}}>
                    {household.address}
                  </Card.Subtitle>
                  </div>
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
