
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



import { EditOutlined, EllipsisOutlined, SettingOutlined
,DeleteOutlined, LikeOutlined } from '@ant-design/icons';
 

import 'antd/dist/antd.css';
import "./Day2Cardview.scss";  

import axios from 'axios';
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

    /*
    let menuList = [];
    menuList.push({lunchAmount:4000,lunchName:'치킨', lunchCount :0,lunchLocation:'https://map.naver.com/v5/search/%EC%B9%98%ED%82%A8%EC%A7%91%EC%97%AD%EC%82%BC/place/35734815?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true'})
    menuList.push({lunchAmount:8000,lunchName:'프리모바치오바치 강남점',lunchCount :0, lunchLocation:'https://map.naver.com/v5/search/%ED%94%BC%EC%9E%90/place/18407600?c=14139657.4259043,4509008.2411027,15,0,0,0,dh'})
    menuList.push({lunchAmount:4000,lunchName:'사람사는 고깃집 김일도',lunchCount :0, lunchLocation:' https://map.naver.com/v5/search/%EA%B0%95%EB%82%A8%EB%A7%9B%EC%A7%91/place/1972037992?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true'})


    this.setState({menuList});
    */

    axios.get("http://54.180.123.35:8080/cardmenus")
        .then( response => {
            console.log(response);
            console.log(response.data);
            this.setState({menuList:response.data})
        })
        .catch( err => {console.log(err)});
  }

  insertSave=()=>{
   

    axios.post("http://54.180.123.35:8080/cardmenu/insert",{
      foodId:this.state.menuList.length,
      lunchName:this.state.lunchName,
      lunchAmount:this.state.lunchAmount,
      lunchCount :0})
        .then( response => {
            console.log(response);
            console.log(response.data);
            if(response.data==1){

            this.setState({ lunchName:"", lunchAmount:0,
              isProductModal:false}, ()=>{
                this.load();
              })
             
            }else{
              Modal.info({title:"에러입니다"});
            }
            
        })
        .catch( err => {console.log(err)});


  }

  render() { 

    return (
      <div style={{padding:150, color:"white"}}>
        <div>카드뷰 상품 목록 만들기</div>

        <Modal 
          style={{backgroundColor:"transparent"}}
          visible={this.state.isProductModal}
          footer={null}
          onCancel={()=>{
            this.setState({isProductModal:false})
          }} 
          bodyStyle={{backgroundColor:"black", border:"1px solid white"}}
           
        > 
          <div>
          <div style={{color:"white"}}>메뉴 입력하기</div>
          <Card
          style={{ width: 300, marginLeft:5 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            
          ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<Input
             style={{width: 150}}
             value={this.state.lunchName}
             onChange={(e)=>{
               this.setState({lunchName:e.target.value})
             }}
             placeholder="점심 메뉴명"
             />}
              description={<Input
             style={{width: 150}}
             value={this.state.lunchAmount}
             onChange={(e)=>{
               this.setState({lunchAmount:e.target.value})
             }}
             placeholder="점심 메뉴 가격"
             />}
            />
          </Card>
          <Button onClick={()=>{
              this.insertSave();
            }}>
            저장하기
          </Button>
          </div>
        </Modal>


        <Modal 
          style={{backgroundColor:"transparent"}}
          visible={this.state.isProductModifyModal}
          footer={null}
          onCancel={()=>{
            this.setState({isProductModifyModal:false})
          }} 
          bodyStyle={{backgroundColor:"black", border:"1px solid white"}}
           
        > 
          <div>
          <div style={{color:"white"}}>메뉴 수정하기 </div>
          <Card
          style={{ width: 300, marginLeft:5 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            
          ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<Input
             style={{width: 150}}
             value={this.state.lunchName}
             onChange={(e)=>{
               this.setState({lunchName:e.target.value})
             }}
             placeholder="점심 메뉴명"
             />}
              description={<Input
             style={{width: 150}}
             value={this.state.lunchAmount}
             onChange={(e)=>{
               this.setState({lunchAmount:e.target.value})
             }}
             placeholder="점심 메뉴 가격"
             />}
            />
          </Card>
          <Button onClick={()=>{
            console.log(this.state.curIndex);
            let menuList = this.state.menuList;
            let menuObj = menuList[this.state.curIndex];
            console.log(menuObj);
            menuObj.lunchName = this.state.lunchName;
            menuObj.lunchAmount = this.state.lunchAmount;
            
            menuList[this.state.curIndex] = menuObj;

            this.setState({menuList, lunchName:"", lunchAmount:0
            , isProductModifyModal:false})
            /*
              let menuList = this.state.menuList;

              menuList.push({lunchName:this.state.lunchName,
              lunchAmount:this.state.lunchAmount});

              this.setState({menuList, lunchName:"", lunchAmount:0,
              isProductModifyModal:false})
              */
            }}>
            수정하기
          </Button>
          </div>
        </Modal>

        <div style={{display:"flex", justifyContent:"flex-end"
        , width:800, margin:"0px auto"}}>
            <Button onClick={()=>{
              this.setState({isProductModal:true})
            }}>
            상품 입력
            </Button>
        </div>
        <div style={{display:"flex", flexWrap:"wrap"}}>
          

        {this.state.menuList&&this.state.menuList.map((item,index)=>{
          return <Card
          style={{ width: 300, marginLeft:5 }}
          cover={
            <div  style={{position:"relative"}}>
              
              <div style={{position:"relative"}}>
              <img
                style={{width:"100%"}}
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              </div>
              <div style={{position:"absolute", right:10, top:10}}>{item.lunchCount}</div>
            
            </div>
          }
          actions={[
            <DeleteOutlined key="delete"
              onClick={()=>{
                let menuList = this.state.menuList;

                menuList.splice(index,1);

                this.setState({menuList});

              }}
             />,
            <EditOutlined key="edit" 
              onClick={()=>{
                this.setState({
                  isProductModifyModal:true, 
                  curIndex:index,
                  lunchName:item.lunchName,
                  lunchAmount:item.lunchAmount})
              }}
            />,
            <LikeOutlined key="like"
            
            onClick={()=>{
               
              let menuList = this.state.menuList;
              let menuObj = menuList[index];
              console.log(menuObj);
              menuObj.lunchCount = menuObj.lunchCount+1; 
              
              menuList[index] = menuObj;

              this.setState({menuList})
              }}
             />,
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
