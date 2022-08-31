'use strict';

const rootDOM = document.getElementById('form');
const root = ReactDOM.createRoot(rootDOM);

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            textarea: 'This is jus a Placeholder textarea text',
            select: 'coconut',
            multiSelect: ['contra', 'gta']
        }
    }

    handleInput = (e) => {
        this.setState({ name: e.target.value });
    };

    handleTextArea = (e) => {
        this.setState({ textarea: e.target.value })
    };

    handleSelect = (e) => {
        this.setState({ select: e.target.value })
    };

    handleMultiSelect = (e) => {
        const selectedOpts = Array.from(e.target.selectedOptions, option => option.value);
        this.setState({ multiSelect: selectedOpts });
    };

    handleSubmit = (e) => {
        alert('A name was submitted ' + this.state.name)
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name:
                <input name="name" type="text" placeholder="Enter your name" value={this.state.name} onChange={this.handleInput} />

                <br />
                <br />

                {/* Text area in jsx takes an attribute value that represents the innerHTML
                of the textarea tag the actual html */}
                Sample TextArea:
                <br />
                <textarea value={this.state.textarea} onChange={this.handleTextArea} />
                <br />
                <br />


                {/* The select element in jsx is similar to the select tag in html except for the fact
                rather than having the selected attribute on the selected option, it rather has a
                value attribute on the select tag */}
                <label>
                    Pick your favorite color:
                    <select value={this.state.select} onChange={this.handleSelect}>
                        <option value="apple">Apple</option>
                        <option value="pear">Pear</option>
                        <option value="coconut">Coconut</option>
                        <option value="grapefruit">GrapeFruit</option>
                        <option value="test">Testing</option>
                    </select>
                </label>
                <br />
                <br />

                <label>
                    Select the games you love:
                    <select name="select" multiple value={this.state.multiSelect} onChange={this.handleMultiSelect}>
                        <option value="contra">Contra</option>
                        <option value="gta">Grand Theft Auto</option>
                        <option value="pes">Pro Evolution Soccer</option>
                        <option value="dmc">Devil May Cry</option>
                    </select>
                </label>
                <br />
                <br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

root.render(<React.StrictMode><NameForm /></React.StrictMode>)