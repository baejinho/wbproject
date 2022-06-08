
import React, { Component } from 'react';

import {
  Upload,
  Icon,
  Button,
  Switch,
  Input,
  Modal,
  Form,
  Select,
  Table,
  Card, 
  Avatar,
  Col,
  Row,
  Checkbox
} from "antd";



import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
 

import 'antd/dist/antd.css';
import "./Day2Cardview.scss";  
 
import moment from "moment";

import _ from "lodash";


const { Meta } = Card;

export default class Day2Cardview extends Component {
    
  state = {
    
    title:"",
    content:"",
    menuList:[]
  } 

  componentDidMount() { 
    this.load();
  } 

  load=()=>{
    let menuList = [];
    menuList.push({lunchAmount:4000,lunchName:'치킨', lunchLocation:'https://map.naver.com/v5/search/%EC%B9%98%ED%82%A8%EC%A7%91%EC%97%AD%EC%82%BC/place/35734815?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true'})
    menuList.push({lunchAmount:8000,lunchName:'프리모바치오바치 강남점', lunchLocation:'https://map.naver.com/v5/search/%ED%94%BC%EC%9E%90/place/18407600?c=14139657.4259043,4509008.2411027,15,0,0,0,dh'})
    menuList.push({lunchAmount:4000,lunchName:'사람사는 고깃집 김일도', lunchLocation:' https://map.naver.com/v5/search/%EA%B0%95%EB%82%A8%EB%A7%9B%EC%A7%91/place/1972037992?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true'})


    this.setState({menuList});
  }

  save=()=>{
      

  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>카드뷰 상품 목록 만들기</div>
         
        <div style={{display:"flex"}}>

        {this.state.menuList&&this.state.menuList.map((item)=>{
          return <Card
          style={{ width: 300, marginLeft:5 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={item.lunchName}
            description={item.lunchAmount}
          />
        </Card>
        })}
        </div>
        
         
     </div>);
  }

}
