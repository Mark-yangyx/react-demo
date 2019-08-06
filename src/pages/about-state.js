import React from 'react'
import Header from './components/header'
import './demos.styl'

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
}

function toCelsius(fahrenheit) {
  return fahrenheit * 1;
}

function toFahrenheit(celsius) {
  return celsius * 2;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil</p>
	} else {
		return <p>The water would not boil</p>
	}
}

class AboutState extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		// this.state = {
		// 	temperature: ''
		// }
	}

	handleChange(e) {
		// this.setState({
		// 	temperature: e.target.value
		// })
		this.props.onTemperatureChange(e.target.value);
	}
	// <BoilingVerdict
	// celsius={parseFloat(temperature)} />
	render() {
		// const temperature = this.state.temperature
		const temperature = this.props.temperature
		const scale = this.props.scale;
		return (
			<div className="person-wrapper">
				<div className="about-state">
					<span>Enter temperature in {scaleNames[scale]}:</span>
					<input
						value={temperature}
						onChange={this.handleChange} />
				</div>
      </div>
		)
	}
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
			<div className="person-wrapper">
				<Header></Header>			
        <AboutState
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <AboutState
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator