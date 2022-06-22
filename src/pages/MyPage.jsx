import React, { Component } from 'react';

import axios from "axios";
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
import { LeftCircleFilled } from '@ant-design/icons';
 
const dataSource = [
  { 
    foodName: '갈비탕',
    likes: 32,
    amount: 10000,
    foodAddress: '강남구'
  },
  { 
    foodName: '피자',
    likes: 10,
    amount: 10000,
    foodAddress: '강남구'
  },
  { 
    foodName: '치킨',
    likes: 50,
    amount: 10000,
    foodAddress: '강남구'
  },
  { 
    foodName: '파스타',
    likes: 10,
    amount: 10000,
    foodAddress: '노원'
  }
];

const columns = [
  {
    title: '음식메뉴',
    dataIndex: 'foodName',
    key: 'foodName',
  },
  {
    title: '음식가격',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '좋아요',
    dataIndex: 'likes',
    key: 'likes',
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
    data : dataSource
  }

  componentDidMount() { 

    

    this.setState({data:dataSource}, ()=>{
      this.load();
    })
  } 

  load = async () =>{

     
    axios.get("http://54.180.123.35:8080/menus")
        .then( response => {
            console.log(response);
            console.log(response.data);
            this.setState({data:response.data})
        })
        .catch( err => {console.log(err)});
  }

  filter = () =>{
    let data = dataSource;
    console.log(data);
    data = data.filter((item)=>
    item.foodName.includes(this.state.searchText)||
    item.foodAddress.includes(this.state.searchText));
    console.log(data);
    this.setState({data});
  }
  render() { 

    return (
      <div style={{width:800, margin:"20px auto"}}>
        <Input 
          value={this.state.searchText}
          onChange={(e)=>{
            
            this.setState({searchText:e.target.value}, ()=>{
              this.filter();
            })
          }}
        />

        <Table dataSource={this.state.data} columns={columns} ></Table>
          
     </div>);
  }

}
