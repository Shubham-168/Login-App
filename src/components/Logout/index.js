import {Component} from 'react'
import './index.css'

class Logout extends Component{
    onClick = () => {
        const {onClick} = this.props
        onClick()
    }
     render(){

        return(
            
            <button className="button" type = "button" onClick={this.onClick}> Logout </button>
            
        )
    }
}


export default Logout

