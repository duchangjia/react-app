import React from 'react'
import {WingBlank,Radio,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import {connect} from 'react-redux'
import { regisger } from '../../redux/user.redux'

@connect(
    state=>state.user,
    { regisger }
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            selete:0,
            type:[
                { value: 0, label: 'genius' },
                { value: 1, label: 'boss' },
            ]
        }
        this.register=this.register.bind(this)
    }
    register(){
        this.props.regisger(this.state)
        // console.log(this.state)
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className="register">{this.props.msg}</p>:null}
                        <InputItem onChange={(v)=>this.handleChange('user',v)}>用户</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={(v)=>this.handleChange('pwd',v)}>密码</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={(v)=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <List renderHeader={() => '选择身份'}>
                        {this.state.type.map(i => (
                            <RadioItem key={i.value} checked={this.state.selete === i.value} onChange={() => this.handleChange('selete',i.value)}>
                                {i.label}
                            </RadioItem>
                        ))}
                    </List>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Register
