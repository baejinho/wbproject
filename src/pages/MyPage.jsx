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
  Col,
  Row,
  Checkbox
} from "antd";
 
import 'antd/dist/antd.css';
import "./MyPage.scss";  
 
const dataSource = [
  { 
    foodName: '갈비탕',
    foodLike: 32,
    foodAddress: '강남구'
  },
  { 
    foodName: '피자',
    foodLike: 10,
    foodAddress: '강남구'
  },
  { 
    foodName: '치킨',
    foodLike: 50,
    foodAddress: '강남구'
  },
  { 
    foodName: '파스타',
    foodLike: 10,
    foodAddress: '노원'
  }
];

const columns = [
  {
    title: '음식점',
    dataIndex: 'foodName',
    key: 'foodName',
  },
  {
    title: '좋아요',
    dataIndex: 'foodLike',
    key: 'foodLike',
  },
  {
    title: '음식점 주소',
    dataIndex: 'foodAddress',
    key: 'foodAddress',
  },
];

export default class MyPage extends Component {
    
  state = {
    index : 0,
    data : ""
  }

  componentDidMount() { 

    this.setState({data:"입력하세요!!!"})
  } 

  render() { 

    return (
      <div style={{width:800, margin:"20px auto"}}>
           
        <Table dataSource={dataSource} columns={columns} ></Table>
          
     </div>);
  }

}
