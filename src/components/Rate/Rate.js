import React from 'react';
import Calc from '../Calc/Calc';
import './Rate.css';

class Rate extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      date : '',
      currencyRate : {}
    }
    this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
  }

  // можно просто вызвать функцию в конструкторе - this.getRate, без исрльзования componentDidMount.
  componentDidMount () {
    this.getRate ()
  }

  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest')
    .then(response => {
      return response.json()
    })
    .then(response => {
      //console.log(response);
      this.setState({ date : response.date }) //получаем date в ответе fetch и присваиваем своему стейту date
      let result = {};
      for (let i = 0; i < this.currency.length; i++) {
        result[this.currency[i]] = response.rates[this.currency[i]]; // перебираем наш массив currency  и присваиваем ему сущтветствующие значения из response.rates
      }
        //console.log(result);
        this.setState({ currencyRate : result }); // присваиваем result currencyRate
    })
  }

  render () {
    return (
      <div>
        <div className="container">
          <main>
            <h3> Курс валют на: {this.state.date}</h3>
            <div className="flex-container">

            {Object.keys(this.state.currencyRate).map((keyName, i) =>
              (
                <div className="block flex-item" key = {keyName}>
                  <div className="currency-name">{keyName}</div>
                  <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
                  <p>* За 1 EUR</p>
                </div>
              )
            )}

            </div>
            <Calc rate={this.state.currencyRate}/>
          </main>
        </div>        
      </div>
    )
  }
}

export default Rate;
