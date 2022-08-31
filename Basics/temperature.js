'use strict';

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

const tryToConvert = (temperature, convertFunction) => {
    const tempDouble = parseFloat(temperature);

    if (!Number.isNaN(tempDouble)) {
        const resultDouble = convertFunction(tempDouble);

        const resultParsed = Math.round(resultDouble * 1000) / 1000;

        return resultParsed.toString();
    }

    return '';
}

const BoilerVerdict = (props) => (<div>
    {props.temp >= 100
        ? <p>The water would boil</p>
        : <p>The water would not boil</p>
    }
</div>);

const TemperatureInput = (props) => {
    const temperature = props.temperature;
    const onChange = props.onChange;
    const scale = props.scale;

    return <fieldset>
        <legend>Enter temperature in {scale === 'f' ? 'fahrenheit' : 'celcius'}</legend>
        <input value={temperature} type="number" placeholder="Enter temp in celcius" onChange={onChange} />
        <br />
    </fieldset>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        }
    }

    render() {
        const temperature = this.state.temperature;
        return (<section>
            <br />
            <br />
            <h1>The Temperature Module</h1>
            <br />
            <TemperatureInput temperature={tryToConvert(temperature, toFahrenheit)} scale="f" onChange={(e) => this.setState({temperature: tryToConvert(e.target.value, toCelsius)})}/>

            <TemperatureInput temperature={temperature} scale="c" onChange={(e) => this.setState({temperature: e.target.value})} />

            <BoilerVerdict temp={parseFloat(temperature)} />
        </section>);
    }
}

const rootDOM = document.getElementById('temp');
const root = ReactDOM.createRoot(rootDOM);

root.render(<Calculator />);