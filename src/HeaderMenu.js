import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Button, Card} from 'antd';
import { Link } from 'react-router-dom';
import { queryUser, loginUser, isLogin } from './server'
import './HeaderMenu.css'
const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const Item = Menu.Item;

class HeaderMenu extends Component {
	state = {
    current: 'index',
    userInfo:[],
  }
	
	componentDidMount() {
    var that = this;
    that.getJsonData();
   }
	
	getJsonData = () => {
    queryUser(loginUser()).then(res => {
      this.setState({userInfo:res.data})
    });
  	};
	
	handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  	callback(key) {
  console.log(key);
  }
  	
	render() {			
		if(!isLogin()){
			return (
						<Menu
					        onClick={this.handleClick}
					        selectedKeys={[this.state.current]}
					        mode="horizontal"
					        style={{lineHeight:'64px'}}
					      	theme="dark"
					      	className="headerMenu">
					      	<div className="login">
					      		请<Link to='/Login'><a>登录</a></Link>,或<a>注册</a>
					      	</div>
					      	<Menu.Item key="index" className="index">
					          <Link to='/home'><Icon type="compass" />首页</Link>
					        </Menu.Item>
					        <Menu.Item key="question">
					          <Icon type="smile-o" />问答
					        </Menu.Item>
					        <Menu.Item key="judge">
					          <Icon type="edit" />评测
					        </Menu.Item>
					        <Menu.Item key="downloading">
					          <Icon type="download" />下载中心
					        </Menu.Item>
					        <Menu.Item key="aboutUs">
					          <Icon type="search" />关于我们
					        </Menu.Item>
					        <div id="searcher">
					        	<Search
							      placeholder="请输入想要搜索的内容"
							      enterButton="搜索"
							      onSearch={value => console.log(value)}
							    />
					        </div>
					        <div className="shop">
					        	<Icon type="shopping-cart" id="shopIcon"/>
					        	<div id="shopText">购物车</div>
					        </div>
					    </Menu>
			);}else{				
				return (
					<Menu
					        onClick={this.handleClick}
					        selectedKeys={[this.state.current]}
					        mode="horizontal"
					        style={{lineHeight:'64px'}}
					      	theme="dark"
					      	className="headerMenu">
					      	<div className="login">
					      		欢迎您 , { this.state.userInfo.map((name,index) =>{return <p>{name.username}</p>}) }
					      	</div>
					      	<Menu.Item key="index" className="index">
					          <Link to='/home'><Icon type="compass" />首页</Link>
					        </Menu.Item>
					        <Menu.Item key="question">
					          <Icon type="smile-o" />问答
					        </Menu.Item>
					        <Menu.Item key="judge">
					          <Icon type="edit" />评测
					        </Menu.Item>
					        <Menu.Item key="downloading">
					          <Icon type="download" />下载中心
					        </Menu.Item>
					        <Menu.Item key="aboutUs">
					          <Icon type="search" />关于我们
					        </Menu.Item>
					        <div id="searcher">
					        	<Search
							      placeholder="请输入想要搜索的内容"
							      enterButton="搜索"
							      onSearch={value => console.log(value)}
							    />
					        </div>
					        <div className="shop">
					        	<Icon type="shopping-cart" id="shopIcon"/>
					        	<div id="shopText">购物车</div>
					        </div>
					      </Menu>
				)
			}
  }
}

export default HeaderMenu ;