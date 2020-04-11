import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Rate from './components/Rate/Rate';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Rate />
        <Footer />
      </div>
    )
  }
}

export default App;
