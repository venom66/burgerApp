import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerB from './containers/BurgerB/BurgerB';

class App extends Component {
  render() {
  return (
    <div>
      <Layout>
        <BurgerB/>
      </Layout>
    </div>    
    
  );
}
}
export default App;
