import {Component} from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import Message from './components/Message'
import './index.css'

class Home extends Component{
    state = {isLogin : false}
    onClick = () => {
        this.setState( (prevState) => {
            if (prevState.isLogin === true){
                return {isLogin : false}
            }
            else{
                return {isLogin : true}
            }
        } )       
    }

    render(){
        const {isLogin} = this.state
        return(
            <div className = "main-container">
                {isLogin ? <Message message = "Please Login" /> : <Message message = "Welcome User" /> }
                {isLogin && <Login onClick= {this.onClick} />}
                {!isLogin && <Logout onClick= {this.onClick} />}
            </div>
        )
    }
}


export default Home


