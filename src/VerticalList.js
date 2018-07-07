import React, { Component } from 'react';
import { List, Avatar, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import './VerticalList.css'
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class VerticalList extends Component{
	render(){
		const { verticalCard } = this.props
		return(
			 <List
			    itemLayout="vertical"
			    size="large"
			    pagination={{
			      onChange: (page) => {
			        console.log(page);
			      },
			      pageSize: 4,}}
			    dataSource={verticalCard}
			    renderItem={a => (
			    <div className="verticalListCon">
			      <Link to={{pathname:'/ClassDetail',data:{
	              	id:a._id,
	              	title:a.title,
	              	image:a.img,
	              	describe:a.describe,
	              	type:a.type,
	              	status:a.status,
	              	price:a.pirce
	              }}}><List.Item
			        key={a.title}
			        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
			        extra={<img width={240} height={200} alt="logo" src={a.img} />}
			      >
			        <List.Item.Meta
			          avatar={<Avatar src={a.avatar} />}
			          title={a.title}
			          description={a.describe}
			        />
			        {a.describe}
			      </List.Item></Link>
			      <Divider/>
			      </div>
			    )}
			/>
		)
	}
}

export default VerticalList;