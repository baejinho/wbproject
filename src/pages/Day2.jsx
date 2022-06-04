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

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20 }}>웰컴 프로젝트 소스 샘플 보기</div>
          <div style={{ fontSize: 20, marginTop:20}}>
          <Link to="/day2login">
            <Button style={{}}  onClick={()=>{
              
            }}>Auth 2.0 로그인 샘플</Button>
          </Link>
          <Link to="/day2lunch">
            <Button style={{}}  onClick={()=>{
              
            }}>점심메뉴 고르기 및 지도 적용</Button>
          </Link>
          <Link to="/day2cardview">
            <Button style={{}}  onClick={()=>{
              
            }}>카드뷰 상품 리스트 화면 만들기</Button>
          </Link>
          </div>
     </div>);
  }

}
