import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Tabs from 'preact-material-components/Tabs';
import 'preact-material-components/Tabs/style.css';
import { Details } from '../../components/tabs/details';
import { Members } from '../../components/tabs/members';
import style from './style'


class Household extends Component {
  render ({ household }) {
    return (
      <div class={style.newhousehold}>
        <h3>Household: { household }</h3>
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
