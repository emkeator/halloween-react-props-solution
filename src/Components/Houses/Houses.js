import React, {Component} from 'react';

export default class Houses extends Component {
    constructor(props) {
        super(props);
        
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
    }

    render(){
        // let this.props.houses[this.state.index] = this.props.houses[this.state.index]
        console.log(this.props.house)
        return(
            <div className="houses">
                {
                    !this.props.done ?
                    <div>
                        <img src={this.props.house.img} alt="halloween house"/>
                        <h3>{this.props.house.candy}</h3>
                        <button onClick={() => {
                            this.props.getCandy(this.props.house.candy);
                        }} disabled={this.props.lastHouse}>Get Candy!</button>
                        <button disabled={this.props.lastHouse} onClick={() => this.props.changeHouse()}>Too spooky - SKIP</button>
                    </div>
                    :
                    <div className="goodbye">
                        Goodnight!
                    </div>
               }
                 
            </div>
        );
    }
}