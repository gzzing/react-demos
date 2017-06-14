function BoilingVerdict(props) {
    if (props.celcius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit'
};

function toCel(fa) {
    return (fa - 32) * 5 / 9;
}

function toFa(cel) {
    return (cel * 9 / 5) + 32;
}

function tempConvert(temp, convert) {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TempInput extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {temp: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // this.setState({temp: e.target.value});
        this.props.onTempChange(e.target.value);
    }

    render() {
        // const temp = this.state.temp;
        const temp = this.props.temp;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text"
                       value={temp}
                       onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            scale: 'c'
        };
        this.handleCelChange = this.handleCelChange.bind(this);
        this.handleFaChange = this.handleFaChange.bind(this);
    }

    handleCelChange(temp) {
        this.setState({scale: 'c', temp});
    }

    handleFaChange(temp) {
        this.setState({scale: 'f', temp});
    }

    render() {
        const temp = this.state.temp;
        const scale = this.state.scale;
        const cel = scale === 'f' ? tempConvert(temp, toFa) : temp;
        const fa = scale === 'c' ? tempConvert(temp, toCel) : temp;
        return (
            <div>
                <TempInput scale="c"
                           temp={cel}
                           onTempChange={this.handleCelChange}
                />
                <TempInput scale="f"
                           temp={fa}
                           onTempChange={this.handleFaChange}
                />
                <BoilingVerdict
                    celcius={cel}
                />
            </div>
        )
    }
}


ReactDOM.render(<Calculator/>, document.getElementById('root'));