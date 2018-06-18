import React from 'react';
import NavBar from './NavBar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

 render() {
   return (
     <div>
        <h1>WorldCupApp</h1>
        <NavBar />
     </div>
   );
 }
}

export default App;