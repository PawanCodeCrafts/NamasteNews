import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends React.Component {
  render() {
    return <>
     <div> 
        <Navbar />
        <News pageSize={5}/>
      </div>;
    </>
   
  }
}

export default App;