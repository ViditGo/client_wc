import React from 'react';
import Header from './Header';
import Body from './Body';

class App extends React.Component {
  constructor(props){
    super(props);
  }

 render() {
   return (
     <div>
        <Header />
        <Body />
     </div>
   );
 }
}

export default App;