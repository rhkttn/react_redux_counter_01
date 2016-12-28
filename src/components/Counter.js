import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                カウント: {this.props.value}<br/>
                <button onClick={this.props.onIncrement}>
                    +1
                </button>
                <button onClick={this.props.onDecrement}>
                    -1
                </button>
            </div>
        );
    }
}
export default Counter;