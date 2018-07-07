import React from 'react';
import {List, Card} from 'antd';
import { Link } from 'react-router-dom';
import './CardList.css'

class CardList extends React.Component {
  render(){
    const { imagecard } = this.props
    return(
        <List
          className="cardList"
          rowKey="id"
          grid={{gutter:32,lg:5,md:5,sm:3,xs:2}}
          dataSource={[...imagecard]}
          renderItem={v=>
        	<div className="cardContent">
	            <List.Item key={v._id}>
	              <Link to={{pathname:'/ClassDetail',data:{
	              	id:v._id,
	              	title:v.title,
	              	image:v.img,
	              	describe:v.describe,
	              	type:v.type,
	              	status:v.status,
	              	price:v.pirce
	              }}}><Card
	                bordered={false}
	              	style={{width:250}}>
	                <div className="card-header">
	                  <img src={v.img} alt=""/>
	                  </div>
	                  <div className="card-content">
	                    <h4 id="title">{v.title}</h4>
	                    <p id="describe">{v.describe}</p>
	                  </div>
	                  <div className="card-footer">
	                    <div className="footerprice">{v.price}</div>
	                    <div className="footerstatus">{v.status}</div>
	                    <div className="footertype">{v.type}</div>
	                  </div>
	                </Card></Link>
	            </List.Item>
            </div>
          }
      />
    );
  }
}

export default CardList