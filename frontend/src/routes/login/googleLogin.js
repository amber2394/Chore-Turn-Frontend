// import { auth, database } from '../../components/firebase';
// import SignIn from '../../components/SignIn';
// import CurrentUser from '../../components/CurrentUser';
//
// export default class Google extends Component {
//   constructor() {
//       super();
//       this.state = {
//         currentUser: null
//       };
//     }
//
//   componentDidMount() {
//     auth.onAuthStateChanged(currentUser => {
//     this.setState({ currentUser });
//     });
//   }
//
//     render() {
//       const { currentUser } = this.state;
//       return (
//         <section>
//           { currentUser ? <CurrentUser user={currentUser}/> : <SignIn/>}
//         </section>
//       );
//     }
//   }
