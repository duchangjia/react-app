import React from 'react'
import {WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import axios from 'axios'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.register=this.register.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    componentDidMount(){
       /* axios.get('/user').then((res)=>{
            console.log(res)
        })*/
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace />
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login
