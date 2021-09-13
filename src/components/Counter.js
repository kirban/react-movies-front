import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        }
    }

    increaseValue = () => {
        this.setState({ amount: this.state.amount + 1 })
    }

    decreaseValue = () => {
        this.setState({ amount: this.state.amount - 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseValue}>+</button>
                <p>{this.state.amount}</p>
                <button onClick={this.decreaseValue}>-</button>
            </div>
        )
    }
}