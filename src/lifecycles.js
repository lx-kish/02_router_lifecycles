import React, { Component } from 'react';

class Life extends Component {
    // 1 get default props

    // 2 set default state
    state = {
        title:'Life cycles'
    }

    // 3 before render
    componentWillMount(){
        console.log('3 before render')
    }

    // 4 render jsx
    render() {
        //console.log(this.props)
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }
    // 5 after render
    componentDidMount(){
        console.log('5 after render');
        document.querySelector('h3').style.color = 'red'
    }
}

export default Life;