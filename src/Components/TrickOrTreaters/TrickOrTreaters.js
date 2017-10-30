import React, {Component} from 'react';
import Child from '../Child/Child'

export default class TrickOrTreaters extends Component {
    // constructor() {
    //     super();
    // }

    render(){
        return(
            <div className="trickOrTreaters">
                {this.props.children.map(child => {
                    return <Child key={child.name} child={child} candy={this.props.candy} />
                })}
            </div>
        )
    }
}