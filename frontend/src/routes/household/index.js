import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Tabs from 'preact-material-components/Tabs';
import 'preact-material-components/Tabs/style.css';
import { Details } from '../../components/tabs/details';
import { Members } from '../../components/tabs/members';


class Household extends Component {
  render ({ household }) {
    return (
      <div>
        <h1>Household: { household }</h1>
        <Tabs className='demo-tabs' indicator-accent={true}>
          <Tabs.Tab href="/household/details">Details</Tabs.Tab>
          <Tabs.Tab href="/household/members">Members</Tabs.Tab>
          <Tabs.Tab href="/household">Chores</Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}

export default Household;
