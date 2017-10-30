import React from 'react';


export default function Child(passedParameters) {
    // console.log(child);
    return (
        <div className="child">
            <h1>{passedParameters.child.name}</h1>
            <img src={passedParameters.child.img} alt={passedParameters.child.name}></img>
            <h3>{passedParameters.child.costume}</h3>
            <ul>{passedParameters.candy.map(e => {
                    return <li key={e}>{e}</li>
                })}
            </ul>
        </div>
    )
}
