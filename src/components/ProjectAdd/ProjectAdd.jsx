import './ProjectAdd.css'
import { Component } from "react";

export default class ProjectAdd extends Component {

    handleClick = () => {
        this.props.toggle()
    }

    render() {
        return (
            <div className='modal'>
                <div className='modal_content'>
                    <span onClick={this.handleClick}>&times;</span>
                    <p>I'm A Pop Up!!!</p>
                </div>
            </div>

        )
    }
}