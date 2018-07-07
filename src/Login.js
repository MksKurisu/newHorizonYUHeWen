import React from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
import { login } from './server';
import cookie from 'react-cookies'

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err,values) => {
      if(!err){
        login(values).then(res => {
          var response = res.message;
          var data={userName:values.username}
          if (response === "login success") {
            this.props.history.push('/home');
            cookie.save('userName', data.userName, { path: '/' });
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="bg">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required:true, message:'请输入用户名！'}],
          })(
            <Input prefix={<Icon type="user" style={{ color:'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('passwords', {
            rules: [{ required:true, message:'请输入密码！'}],
          })(
            <Input prefix={<Icon type="lock" style={{ color:'rgba(0,0,0,.25)'}}/>} type="password" placeholder="密码"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className='login-form-forgot' href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
        <Link to='/regist'><a className='login-form-regist' href="">注册新账户</a></Link>
        </FormItem>
      </Form>
      </div>
    );
  }
}
const Login = Form.create()(LoginForm)
export default withRouter(Login)
