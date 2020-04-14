import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Rate from './components/Rate/Rate';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import './App.css';



class App extends React.Component {
  render () {
    return (
      <div>
        <div>

          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Rate} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>

        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
                частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                местоположения.&nbsp;
                <button className="btn btn-primary btn-sm">OK</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
