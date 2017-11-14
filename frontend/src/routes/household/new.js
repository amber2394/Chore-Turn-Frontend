import { h, Component } from 'preact';

export default class AddHousehold extends Component {
    handleClick = (e) => {
      e.preventDefault();
      var url = 'http://localhost:3000/households',
          data= JSON.stringify({
            household: {
              name: this.HouseholdName.value,
              address: this.address.value,
              city: this.city.value,
              state: this.state.value,
              zip_code: this.zipcode.value
            }
          });

        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: data
        })
        .then( res => res.json())
        // .then( jsonRes => {debugger})
        .then( jsonRes => window.location = "/profile")
        .catch( err => console.log(err))
    }

    render() {
      return (
        <div className="add-household">
          <br></br>
          <br/>
          <h2>Add A New Household</h2>
          <br/>
          <form onSubmit={this.handleClick} method="get">
          <ul>
            <li> Household name: <input ref={a => this.HouseholdName = a} type="text"/> </li> <br/>
            <li> Address: <input ref={b => this.address = b} type="text"/> </li> <br/>
            <li> City: <input ref={c => this.city = c} type="text"/> </li> <br/>
            <li> State: <input ref={d => this.state = d} type="text"/> </li> <br/>
            <li> Zip Code: <input ref={e => this.zipcode = e} type="integer"/> </li> <br/>
            <input type="submit" value="Add Household"/>
          </ul>
          </form>
        </div>
      )
    }
}
