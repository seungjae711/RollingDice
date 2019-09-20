import React, { Component } from 'react';
import Die from "./Die"
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);
        this.state = { die1: 'one', die2: 'one', rolling: false };
    }
    Roll = () => {
        let rand1 = this.props.sides[Math.floor(Math.random() * 6)];
        let rand2 = this.props.sides[Math.floor(Math.random() * 6)];

        this.setState({ die1: rand1, die2: rand2, rolling: true});

        //wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({ rolling: false});
        }, 1000);
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face = {this.state.die1} rolling={this.state.rolling}/>
                    <Die face = {this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.Roll} disabled ={this.state.rolling}>
                    {this.state.rolling ? "Rolling...." : "Roll Dice!"}     
                </button>
            </div>

        );
    }
}

export default RollDice;