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


import "./WBButton.scss";  
 

export default class WBButton extends Component {
    

    render(){
        return <Button className="buttonCustom" onClick={this.props.onClick}>{this.props.buttonName}</Button>
    }
}
