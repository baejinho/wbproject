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
import moment from "moment";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";


import _ from "lodash";
 

import 'antd/dist/antd.css';
import "./Day2Lunch.scss";  
 
const NAVER_API_KEY = "ot56sbq903";


export default class Day2Lunch extends Component {
    
  state = { 
    title:"",
    content:"",
    isMenuModal:false,
    isMapModal:false,
    menuList:[]
  } 

  componentDidMount() { 
    this.load();
  } 

  load=()=>{
    let menuList = [];
    menuList.push({lunchName:'치킨', lunchLocation:'https://map.naver.com/v5/search/%EC%B9%98%ED%82%A8%EC%A7%91%EC%97%AD%EC%82%BC/place/35734815?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true'})
    menuList.push({lunchName:'프리모바치오바치 강남점', lunchLocation:'https://map.naver.com/v5/search/%ED%94%BC%EC%9E%90/place/18407600?c=14139657.4259043,4509008.2411027,15,0,0,0,dh'})
    menuList.push({lunchName:'사람사는 고깃집 김일도', lunchLocation:' https://map.naver.com/v5/search/%EA%B0%95%EB%82%A8%EB%A7%9B%EC%A7%91/place/1972037992?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true'})


    this.setState({menuList});
  }

  save=()=>{
      

  }

  render() { 

    return (
      <div style={{width:900, padding:150, color:"white", margin:"0px auto"}}>
        <div>점심 메뉴 고르기</div>
        <div>오늘의 점심 : {this.state.curObject&&this.state.curObject.lunchName}</div>
        <Modal 
        style={{backgroundColor:"transparent"}}
          visible={this.state.isMapModal}
          footer={null}
          onCancel={()=>{
            this.setState({isMapModal:false})
          }} 
          bodyStyle={{backgroundColor:"black", border:"1px solid white"}}
           
        >

<div>
        <RenderAfterNavermapsLoaded
      ncpClientId={NAVER_API_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId={"map"} // default: react-naver-map
        style={{
          width: 400, // 네이버지도 가로 길이
          height: 400 // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        zoom={12}
      >
         <Marker
                  // icon={""}
                  key={0}
                  position={{ lat: 37.554722, lng: 126.970833}}
                  animation={2}
                  onClick={() => {
                    //alert('hello');
                  }}
                />

      </NaverMap>
    </RenderAfterNavermapsLoaded>
        </div>
        </Modal>

        <Modal 
        style={{backgroundColor:"transparent"}}
          visible={this.state.isMenuModal}
          footer={null}
          onCancel={()=>{
            this.setState({isMenuModal:false})
          }} 
          bodyStyle={{backgroundColor:"black", border:"1px solid white"}}
           
        >
          <div style={{backgroundColor:"black", padding:0}}>
            <Input
             style={{marginTop:15, width: 240}}
             value={this.state.lunchName}
             onChange={(e)=>{
               this.setState({lunchName:e.target.value})
             }}
             placeholder="점심 메뉴명"
             />
            <Input
             style={{marginTop:15, width: 240}}
             value={this.state.lunchLocation}
             onChange={(e)=>{
               this.setState({lunchLocation:e.target.value})
             }}
             placeholder="점심 메뉴 장소"
             />
              <div style={{display:"flex", width:"100%", justifyContent:"center", marginTop: 70}}>
                    <div 
                    onClick={()=>{
                      let menuList = this.state.menuList;
                      menuList.push({lunchName:this.state.lunchName, lunchLocation:this.state.lunchLocation})

                      this.setState({menuList, lunchName:"", lunchLocation:"", isMenuModal:false})
                    }}
                    style={{cursor:"pointer",fontSize:18,color:"black",fontWeight:"bold",width:208, height:50, display:"flex", justifyContent:"center", alignItems:"center", background:"#00ff70"}}>
                      저장하기
                    </div>

                </div>
          </div>
        </Modal>
        <div style={{width:"100%", marginBottom: 50}}>

        </div>
        <div style={{display:"flex", justifyContent:"flex-end"}}>
          <Button onClick={()=>{
            this.setState({isMenuModal:true})
          }}>
          메뉴 입력
          </Button>
          <Button style={{marginLeft:10}}
            onClick={()=>{
              let menuList = this.state.menuList;
              let random = Math.floor(Math.random()*menuList.length);
              console.log(random);


              this.setState({curObject:menuList[random]})
            }}
          >
          오늘의 점심은?
          </Button>

          <Button style={{marginLeft:10}}
            onClick={()=>{
              


              this.setState({isMapModal:true})
            }}
          >
            지도 보기
          </Button>
         
        </div>
      <div>
        {this.state.menuList&&this.state.menuList.map((item)=>{
          return <div style={{color:"white",marginTop:20,  display:"flex", justifyContent:"flex-start", alignItems:"flex-start"}}>
          <div style={{width:100}}>{item.lunchName}</div>
          <div style={{width:"60%"}}>{item.lunchLocation}</div>
          </div>
        })}
      </div>
     </div>);
  }

}
