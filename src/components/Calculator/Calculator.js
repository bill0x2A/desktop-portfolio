import React, { Component } from 'react';
import classes from './Calculator.module.css';
import Draggable from 'react-draggable';
import { forceLink } from 'd3';
import { isFunction } from 'lodash';
import { connect } from 'react-redux';

const buttons = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*"
]

class Calculator extends Component {

    state = {
        zIndex : null,
        elements : [],
        operations : [],
        screen : [],
        buttons : [
            " ", "CE", "C", "DEL", "1/x", "x^2", "√", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", " ", "0", ".", "="
        ]
    }

    parse = (screen) => {
        let buffer = [],
            elements = [],
            operations = [];

        if(!parseFloat(screen[screen.length-1])){
            screen.splice(-1);
        }
        for(let i=0;i<screen.length;i++){
            console.log("Parsing : ", screen[i]);
            if(parseFloat(screen[i]) || screen[i] === "." || screen[i] === "0"){
                buffer.push(screen[i]);
            } else {
                operations.push(screen[i]);
                const newElement = parseFloat(buffer.join(''));
                elements.push(newElement);
                buffer  = [];
            }
        }
        if(buffer.length !== 0){
            const newElement = parseFloat(buffer.join(''));
            elements.push(newElement); 
        }

        return [elements, operations];
    }

    evaluate = (elements, operations) => {

        operations.forEach(operation => {
            switch(operation){
                case "×":
                    elements[0] = elements[0] * elements[1];
                    elements.splice(1);
                    break;
                case "÷":
                    elements[0] = elements[0] / elements[1];
                    elements.splice(1);
                    break;
                case "+":
                    elements[0] = elements[0] + elements[1];
                    elements.splice(1);
                    break;
                case "-":
                    elements[0] = elements[0] - elements[1];
                    elements.splice(1);
                    break;
            }
            return(elements[0]);
        })
    }

    click = (value) => {
        let screen = [...this.state.screen];
        switch(value){
            case " ":
                return
            case "C":
                this.setState({screen : []});
                return
            case "DEL": case "CE":
                screen.pop();
                this.setState({screen : screen});
                return
            case "=":
                const [elements, operations] = this.parse(screen);
                elements.forEach(element => console.log(element));
                this.evaluate(elements, operations);
                this.setState({screen : elements});
                return
            default :
                if(!parseFloat(value) && !parseFloat(screen[screen.length-1])){
                    return
                } else {
                    screen.push(value);
                    this.setState({screen : screen});
                    return
                }
        }

    }

    componentDidMount = () => {
        this.setState({zIndex : this.props.z + 1});
        this.props.clicked(this.props.windowID);
    }


    render () { 
        return (
            <div className = {classes.Calculator}>
                <div className = {classes.Screen}>
                    {this.state.screen.join('')}
                </div>
                <div className = {classes.Buttons}>
                    {this.state.buttons.map(button => (
                        <div className = {classes.Button}
                             onClick = {() => this.click(button)}>
                            <p>{button}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        z : state.currentZ
    }
  }

export default connect(mapStateToProps)(Calculator);