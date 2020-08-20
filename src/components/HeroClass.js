import React, { Component } from 'react'

class HeroClass extends Component {
    render() {
        return (
            <div>
                 <h1>  Mi nombre es: {this.props.name} y soy : {this.props.heroName}</h1>
            </div>
        )
    }
}


export default  HeroClass;