import React, {Component} from 'react';
import './App.css';

// export? to be called at test
// 1. Unit-text  functions are separated from component
export const doIncrement = (prev) => ({
    counter: prev.counter + 1
});
export const doDecrement = (prev) => ({
    counter: prev.counter - 1
});



// 2.Integration test:  add a children component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);

    }

    onIncrement() {
        this.setState(doIncrement);
    }

    onDecrement() {
        this.setState(doDecrement);
    }

    render() {
        const {counter} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Counter</h1>
                    <p>{counter}</p>
                </header>
                <button type='button'
                        onClick={this.onIncrement}>+</button>
                <button type='button'
                        onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}
export const Counter =({counter}) => (<p>{counter}</p>)
export default App;
