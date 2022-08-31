'use strict';

const rootDOM = document.getElementById('clock');
const root = ReactDOM.createRoot(rootDOM);

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <h2>The time is {new Date().toLocaleTimeString()},</h2>
//         </div>
//     );
// }

// function tick() {
//     root.render(<Clock />);
// }

// setInterval(tick, 1000);

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            checking: true
        };
    }

    // tick = () => this.setState({ date: new Date() });

    // Try using setState with function rather
    // This is mostly useful when trying to update the value of state while depending on a previous state or prop
    tick = () => this.setState((prevState, props) => ({ date: new Date()}))

    componentDidMount = () => this.timerID = setInterval(() => this.tick(), 1000);

    componentWillUnmount = () => clearInterval(this.timerID);

    render = () => {
        return (
            <div>
                <h1>Hello World</h1>
                {/* This component would not render */}
                {undefined}{false}{null}
                {/* This would render the text 0 */}
                {0}
                <h2>The Time is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    };
}

root.render(<React.StrictMode><Clock /></React.StrictMode>);


