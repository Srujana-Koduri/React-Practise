import React, {Component} from "react";

class CounterComponent extends Component{
    state = {
        count: 0
    }

    // constructor(){
    //     super();
    //     this.increment=this.increment.bind(this);
    //     this.decrement=this.decrement.bind(this);
    // }
    increment=()=>{
        this.setState({
            count : this.state.count+1
        });
    }

    decrement=()=>{
        this.setState({
            count : this.state.count-1
        });
    }
    render(){
        return(
            <div>
                <h3>I am Counter component</h3>
                <p>Count Value: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>    
        )
    }
}

export default CounterComponent;