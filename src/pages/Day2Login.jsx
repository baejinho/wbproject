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
 
import "./Day2Login.scss";  
 
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

  load=()=>{
      

  }

  save=()=>{
      

  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
         
         
     </div>);
  }

}
