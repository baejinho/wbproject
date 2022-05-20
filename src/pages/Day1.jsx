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


import "./Day1.scss";  
 

export default class Day1 extends Component {
    

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold"}}>REACT 개발 세팅 및 이해<br /><br /> </div>
 
      

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:30}}>필요한 툴</div>

          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>  <br />
          마이크로소프트에 의해서 개발된 오픈 소스, 크로스 플랫폼 코드 편집기 
          </div>
          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://www.nosqlbooster.com/">https://www.nosqlbooster.com/</a>  <br />
          NoSQLBooster는 MongoDB v2.6-5.0용 크로스 플랫폼 GUI 도구
          </div> 
          <div style={{ fontSize: 20, marginTop:20}}>
          <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon">https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon</a>  <br />
          MongoDB 설치 
          </div>
          
          <div style={{ fontSize: 20, marginTop:20}}>
            <a href="https://www.postman.com/">https://www.postman.com/</a> <br />
            Postman은 API를 구축하고 사용하기 위한 API 플랫폼
          </div>  
          <div style={{ fontSize: 20, marginTop:20}}>
            <a href="https://nodejs.org/ko/">https://nodejs.org/ko/</a> <br />
            Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
          </div>   
          <div style={{ fontSize: 20, marginTop:20}}>
            <a href="https://www.npmjs.com/package/pm2">https://www.npmjs.com/package/pm2</a> <br />
            PM2는 로드 밸런서가 내장된 Node.js 애플리케이션용 프로덕션 프로세스 관리자
          </div>  
          <div style={{ fontSize: 20, marginTop:20}}>
            <a href="https://github.com/nvm-sh/nvm/blob/master/README.md">https://github.com/nvm-sh/nvm/blob/master/README.md</a> <br />
            nvm은 node.js 용 버전 관리자로 , 사용자별로 설치되고 쉘별로 호출되도록 설계
          </div>  

          <div style={{fontFamily: "Mark Pro Heavy", fontSize: 30, fontWeight:"bold", marginTop:20 }}>소스 샘플 보기</div>
     

        <div style={{ fontSize: 20, marginTop:20}}>
          <Link to="/day2statesample">
            <Button onClick={()=>{
            
          }}>State Sample</Button> 
          </Link>
          <Link to="/day2csssample">
            <Button style={{marginLeft:20}}  onClick={()=>{
              
            }}>CSS Sample</Button>
          </Link>
          

        </div>  

     </div>);
  }

}
