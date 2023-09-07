import {Component} from 'react'
import './index.css'

class Login extends Component{
    onClick = () => {
        const {onClick} = this.props
        onClick()
    }
    render(){
        
        return(
            
            <button className="button" type="button" onClick={this.onClick}> Login </button>
            
        )
    }
}


export default Login

