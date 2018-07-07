import React, { Component } from 'react';
import {Layout, List, Tabs, TreeSelect } from 'antd';
import { Link } from 'react-router-dom';
import { queryLessons } from './server'
import HeaderMenu from './HeaderMenu'
import VerticalList from './VerticalList'
import './Classfication.css'
const { Header, Content, Sider, } = Layout;
const TabPane = Tabs.TabPane;
const gradeData = [{
  label: '七年级',
  value: '0',
  key: '0',
}, {
  label: '八年级',
  value: '1',
  key: '1',
},{
  label: '九年级',
  value: '2',
  key: '2',
}];

const genreData = [{
  label: '基础',
  value: '3',
  key: '3',
}, {
  label: '阅读',
  value: '4',
  key: '4',
},{
  label: '写作',
  value: '5',
  key: '5',
}];

class Classfication extends Component {
	state = {
		gradeValue: undefined,
		genreValue: undefined,
		lessons:[],
		current:''
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
  	
  	onGenreChange = (value) => {
    console.log(value);
    this.setState({ genreValue:value });
  }
  	
  	onGradeChange = (value) => {
    console.log(value);
    this.setState({ gradeValue:value });
  }
  
  	callback(key) {
  console.log(key);
  }

  render() {
    return (
    	<Layout className="father">
    		<Header className="headerContainer" style={{height:'75px'}}>
			      <HeaderMenu />
		    </Header>
		    <Content className="listContent">
		    	<div className="tabContent">
		    		<Tabs defaultActiveKey="1" onChange={this.callback}>
					    <TabPane tab="直播课堂" key="1">
						    <div style={{float:'left'}}>
						    	<TreeSelect
							        style={{ width: 180 }}
							        value={this.state.gradeValue}
							        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
							        treeData={gradeData}
							        placeholder="全部年级"
							        treeDefaultExpandAll
							        onChange={this.onGradeChange}
							      />
					    	</div>
						    	<TreeSelect
							        style={{ width: 200, marginLeft:'50px' }}
							        value={this.state.genreValue}
							        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
							        treeData={genreData}
							        placeholder="课程分类"
							        treeDefaultExpandAll
							        onChange={this.onGenreChange}
							        />
					    	<VerticalList verticalCard={this.state.lessons}/>
					    </TabPane>
					    <TabPane tab="录播课堂" key="2">
					    	<div style={{float:'left'}}>
						    	<TreeSelect
							        style={{ width: 200 }}
							        value={this.state.gradeValue}
							        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
							        treeData={gradeData}
							        placeholder="全部年级"
							        treeDefaultExpandAll
							        onChange={this.onGradeChange}
							      />
					    	</div>
					    	<div style={{marginLeft:'50px',float:'left'}}>
						    	<TreeSelect
							        style={{ width: 200 }}
							        value={this.state.genreValue}
							        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
							        treeData={genreData}
							        placeholder="课程分类"
							        treeDefaultExpandAll
							        onChange={this.onGenreChange}
							        />
					    	</div>
					    	<VerticalList verticalCard={this.state.lessons}/>
					    </TabPane>
					</Tabs>
		    	</div>	    	
		    </Content>
		</Layout>
	);
  }
};

export default Classfication;