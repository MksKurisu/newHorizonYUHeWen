import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Carousel, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import {queryLessons} from './server'
import CardList from './CardList'
import HeaderMenu from './HeaderMenu'
import './HomePage.css';
const { Header, Content, Sider, } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class HomePage2 extends Component {
	state = {
    current: 'index',
    title: '',
    lessons:[]
  }
	
	componentDidMount() {
    var that = this;
    that.getJsonData();
   }
	
	getJsonData = () => {
    queryLessons().then(res => {
      this.setState({lessons:res})
      console.log(res)
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
    return (
    	<Layout className="father">
    		<Header className="headerContainer">
		      <HeaderMenu />
		      <div className="middleHeader">
			    	<div className="advertise">
			    			<h1>广告</h1>
			    	</div>
			    	<div className="decorate">
				    	<div id="logo">
				    		<h1>LOGO</h1>
				    	</div>
				    	<div id="tiyan">
				    		<h1>立即免费体验</h1>
				    	</div>
			    	</div>
		      </div>
		    </Header>
		    <Layout className="middle">
		        <Sider 
		        width={200} 
		        style={{ background: '#fff' }}>
			        <Menu onClick={this.handleClick} style={{ width: 200 }} mode="vertical" className="verticalContainer">
					    <SubMenu key="sub1" title={<span><span>初一</span></span>}>
					      	<Menu.Item key="10"><Link to='/classfication'>基础</Link></Menu.Item>
					        <Menu.Item key="11"><Link to='/classfication'>阅读</Link></Menu.Item>
					        <Menu.Item key="12"><Link to='/classfication'>写作</Link></Menu.Item>
					    </SubMenu>
					    <SubMenu key="sub2" title={<span><span>初二</span></span>}>
					      <Menu.Item key="13"><Link to='/classfication'>基础</Link></Menu.Item>
					      <Menu.Item key="14"><Link to='/classfication'>阅读</Link></Menu.Item>
					      <Menu.Item key="15"><Link to='/classfication'>写作</Link></Menu.Item>
					    </SubMenu>
					    <SubMenu key="sub4" title={<span><span>初三</span></span>}>
					      <Menu.Item key="16"><Link to='/classfication'>基础</Link></Menu.Item>
					      <Menu.Item key="17"><Link to='/classfication'>阅读</Link></Menu.Item>
					      <Menu.Item key="18"><Link to='/classfication'>写作</Link></Menu.Item>
					    </SubMenu>
					</Menu>
		        </Sider>
		        <Content className="carousel">
		        	<Carousel autoplay effect="fade">
						<div><img alt="loading" src={require('./pic/u58.jpg')} className="carouselPic" /></div>
					    <div><img alt="loading" src={require('./pic/u59.jpg')} className="carouselPic" /></div>
					    <div><img alt="loading" src={require('./pic/u60.jpg')} className="carouselPic" /></div>
					</Carousel>
		        </Content>
		        <Sider
		        width={220}
		        style={{ background: '#fff' }}
		        className="rightSider">
		        	<Tabs defaultActiveKey="eduAct" onChange={this.callback}>
					    <TabPane tab="教育动态" key="eduAct">
					        <p>Content of Tab Pane 1</p>
					    </TabPane>
					    <TabPane tab="校区动态" key="schAct">
					        <p>Content of Tab Pane 2</p>
					    </TabPane>
					</Tabs>
				</Sider>
	      	</Layout>
	      	<Layout className="classLayout">
	      		<Sider className="classSider">
	      			<div className="tuijian">推荐课程</div>
	      			<div className="tuijianContent">
	      				<img alt="loading error" src={require('./pic/u41.png')} className="tuijianPic" />
	      				<div className="tuijianDesc">
		      				<div className="tuijianTitle">爱莲说</div>
		      				<div className="tuijianDetail">经典诗词串讲</div>
		      				<div className="tuijianGenre">基础诗词</div>
		      				<div className="tuijianGrade">七年级</div>
		      				<div className="tuijianPrice">免费</div>
	      				</div>
	      			</div>
	      		</Sider>
	      		<Content className="classContent">
	      				<Tabs defaultActiveKey="1" onChange={this.callback} size='large' style={{width:'1040px',height:'550px'}}>
						    <TabPane tab="最新课程" key="1" ><CardList imagecard={this.state.lessons} /></TabPane>
						    <TabPane tab="特惠课程" key="2" ><CardList imagecard={this.state.lessons} /></TabPane>
						    <TabPane tab="知识详解" key="3" ><CardList imagecard={this.state.lessons} /></TabPane>
						</Tabs>
	      		</Content>
	      	</Layout>
      </Layout>
    );
  }
}

export default HomePage2;