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

import {   
  Link
} from "react-router-dom"; 

 
import "./Day2.scss";  
 

export default class Day2 extends Component {
  state = {
    
  }

  componentDidMount() { 
  } 


  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>소규모 프로젝트<br /><br /> </div>
          

          

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20 }}>프로젝트 소스 샘플 보기</div>
          <div style={{ fontSize: 20, marginTop:20}}>
          <Link to="/day2schedule">
            <Button style={{}}  onClick={()=>{
              
            }}>Schedule Sample</Button>
          </Link>
          <Link to="/day2diary">
            <Button style={{marginLeft:20}}  onClick={()=>{
             
            }}>Diary Sample</Button>
          </Link>

          <Link to="/day2money">
            <Button style={{marginLeft:20}}  onClick={()=>{
            
            }}>Money Manage Sample</Button>
          </Link>

          <Link to="/day2photo">
         <Button style={{marginLeft:20}}  onClick={()=>{
            
            }}>Photo Album Sample</Button>
            </Link>
          </div>  
     </div>);
  }

}
