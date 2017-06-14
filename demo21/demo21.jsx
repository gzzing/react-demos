class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Please write an essay about your favorite DOM element.'};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('A name is submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    {/*<input type="text" value={this.state.value} onChange={this.handleChange}/>*/}
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('your favorite flavor is :' + this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        alert('checkbox:' + this.state.isGoing + '\nnumberOfGuests: ' + this.state.numberOfGuests);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    isGoing:
                    <input type="checkbox"
                           name="isGoing"
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Number of Guests:
                    <input type="number"
                           name="numberOfGuests"
                           value={this.state.numberOfGuests}
                           onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

ReactDOM.render(<Reservation/>, document.getElementById('root'));