import React from 'react';
import ButtonCounter from './components/counter/Button';
import Result from './components/counter/Result';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        // tao state
        this.state = {
            count: 0
        }
    }

    // viet ham cap nhat state
    incrementCounter = () => {
        // cap nhat la trang thai ban dau
        this.setState({count: this.state.count + 1});
    }

    decrementCounter = () => {
        // cap nhat la trang thai ban dau
        this.setState({count: this.state.count - 1});
    }
    
    render() {
        return (
            <>
                <h1> Counter </h1>
                <Result result={this.state.count} />
                <ButtonCounter click={this.incrementCounter} type="button" name="increment">+</ButtonCounter>
                <ButtonCounter click={this.decrementCounter} type="button" name="decrement">-</ButtonCounter>
            </>
        )
    }
}
export default Counter;