import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      result : 0
    }

  }

  static getDerivedStateFromProps (props, state) { // метод в котором мы вставляем props в state
    return {rate : props.rate}
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    //console.log(elements['count-currency'].value); // получаем значения по name
    //console.log(elements['type-currency'].value); // получаем значения по name
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({
      result : (countCurrency / this.state.rate[typeCurrency])
    })
  }

  render () {
    return (
      <div>
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>

            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="type-currency" id="">

                  {Object.keys(this.props.rate).map((keyName, i) =>
                    (
                      <option key={keyName} value={keyName}>{keyName}</option>
                    )
                  )}

              </select>
              <input type="submit" defaultValue="calc" />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
                <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>

    )
  }
}

export default Calc;
