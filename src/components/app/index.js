import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props){
    super(props);
  }

 render() {
   return (
     <div>
        <h1>World Cup App</h1>
        <NavBar />
     </div>
   );
 }
}

export default App;