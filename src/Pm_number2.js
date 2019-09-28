import React, { Component } from 'react';

class Pm_number2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstnum: null,
            secondnum: null,
            total: null
        }
    }

    addHandler(e) {
        this.setState({ total: parseInt(this.state.firstnum) + parseInt(this.state.secondnum) })
    }

    subtractHandler(e) {
        this.setState({ total: this.state.firstnum - this.state.secondnum })
    }
    multiplyHandler(e) {
        this.setState({ total: this.state.firstnum * this.state.secondnum })
    }
    divideHandler(e) {
        this.setState({ total: (this.state.firstnum / this.state.secondnum) })
    }
    exponentHandler(e) {
        this.setState({ total: this.state.firstnum ** this.state.secondnum })
    }

    firstNumHandler(e) {
        this.setState({ firstnum: e.target.value });
    }
    secondNumHandler(e) {
        this.setState({ secondnum: e.target.value });
    }
    outputHandler(e) {
        this.setState({ total: e.target.value });
    }

    render() {
        return (
            <center><div class="container">
                <div class="jumbotron">
                    <h1>Calculator</h1><br /><br />
                    <form class="form-inline">
                        <h5>FirstNum: </h5>
                        <input type="number" id="input1" class="form-control mb-2 mr-sm-2" placeholder="first number" onChange={(e) => this.firstNumHandler(e)} ></input>
                        <h5>SecondNum: </h5>
                        <input type="number" id="input2" class="form-control mb-2 mr-sm-2" placeholder="second number" onChange={(e) => this.secondNumHandler(e)}></input>
                    </form>
                    <br />
                    <br />
                    <button id="a" class="btn btn-info" onClick={(e) => this.addHandler(e)}>Add</button>
                    <button id="b" class="btn btn-info" onClick={(e) => this.subtractHandler(e)}>Subtract</button>
                    <button id="c"class="btn btn-info" onClick={(e) => this.multiplyHandler(e)}>Multiply</button>
                    <button id="d" class="btn btn-info" onClick={(e) => this.divideHandler(e)}>Divide</button>
                    <button id="e" class="btn btn-info" onClick={(e) => this.exponentHandler(e)}>Exponent</button>
                    <br />
                    <br />


                    <div>
                        <h3>Output</h3>
                        <span>{this.state.total}</span>
                    </div>
                </div></div></center>
        );
    }

}
export default Pm_number2;