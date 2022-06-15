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
 
import "./Day2Login.scss";  


import axios from "axios";
import qs from "qs";

 
import moment from "moment";

import _ from "lodash";

export default class Day2Login extends Component {
    
  state = { 
    title:"",
    content:""
  } 

  componentDidMount() { 
    this.load();
  } 

  load= async ()=>{
    const code = new URL(window.location.href).searchParams.get("code");

   
    if(code && code!=""){
      console.log(code);
      alert(code);
      this.getToken(code);
    }

  }

  getToken = async (code) => {
    const REST_API_KEY = "0d5077c2ec06ff84dd8271dfc871b638";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
     
     

    /*
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    console.log(payload);
    */
    const payload = {
      data:{
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code 
      }
    }
    ;
    console.log(payload);
    try {
      // access token 가져오기
      const res = await axios.post(
        "http://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      console.log(res.data.access_token);
      window.Kakao.Auth.setAccessToken(res.data.access_token);

      //window.location.href = "/day2login";
      //history.replace("/day2login");
    } catch (err) {
      console.log(err);
    }
  };


  save=()=>{
      

  }

  render() { 
    const REST_API_KEY = "dad8d385bf212be778f49ff44953c938";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
    return (
      <div style={{padding:150, color:"white"}}>
       
         <Button 
            onClick={()=>{
              window.location.href=KAKAO_AUTH_URL;
            }}
         > 카카오 로그인 </Button> 
         
     </div>);
  }

}
