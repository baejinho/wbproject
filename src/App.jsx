import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  //Switch,
  //withRouter,
  Link, 
  useNavigate,
  useLocation,
  useParams
} from "react-router-dom"; 

import { createBrowserHistory } from "history";


import HomePage from "./pages/Home"; 
import Day2 from "./pages/Day2";
import Day2StateSample from "./pages/Day2StateSample";
import MyPage from "./pages/MyPage";
import Day2DBSample from "./pages/Day2DBSample";
import Day2CSSSample from "./pages/Day2CSSSample";
import Day2Schedule from "./pages/Day2Schedule";
import Day2Diary from "./pages/Day2Diary";
import Day2Photo from "./pages/Day2Photo";
import Day2MoneyManage from "./pages/Day2MoneyManage";

import Day2Login from "./pages/Day2Login";
import Day2Lunch from "./pages/Day2Lunch";
import Day2Cardview from "./pages/Day2Cardview";

import Day3 from "./pages/Day3";
import Day1 from "./pages/Day1";
   

import 'antd/dist/antd.min.css';
import "./App.scss"; 

const appHistory = createBrowserHistory();
 
class Header extends Component {
  state = {
    visible: false,
    langtext : "한국어 / KR", 
    email:"",
    password:"", 
    left: false 
  }
 
  renderPC(){

    //const { pathname } = useLocation(); 
    //this.props.useLocation
    //const { pathname } = this.props.useLocation;
    let color = "#FFFFFF";
    let selectedcolor = "#00ff70";
 
    return ( <div style={{minWidth:1290,width:1290, margin:"0px auto",background:"black", display:"flex",justifyContent:"space-between",
  alignItems: "center"}}>
       <Link to="/">
          <div
           style={{fontSize:30,width:180, marginTop: 10, marginRight: 5, fontFamily:"Mark Pro Heavy", color:"white", cursor:"pointer"}}
           onClick={()=>{this.props.history.push("/")}}
           >
             웰컴 저축은행 {"\n"}
             역량 강화
           </div> 
        
       </Link>
       
        
          
        <div style={{display:"flex", width: '50%' , height: 110,  flexDirection:"column",
        alignItems: "flex-end", justifyContent:"flex-start"}}>
    
        
        <div style={{display:"flex", marginTop: 20}}>
            <Link to="/day1"><div style={{width:160, marginTop: 10, color: 
          color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
            onClick={()=>{
              //console.log("day1");
              //this.props.history.push("/day1")
              }}>
        
            Day1
          </div></Link>
          <Link to="/day2"><div style={{width:160, marginTop: 10, color: 
           color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{
                console.log("day2");
                this.props.history.push("/day2")
                }}>
          
            Day2~6
          </div></Link>
          <Link to="/mypage"><div style={{width:160, marginTop: 10, color: 
           color, textAlign:"center", fontSize:13, cursor:"pointer", fontFamily:"Mark Pro Heavy", letterSpacing:5}}
              onClick={()=>{
                 
                }}>
          
            My Page
          </div></Link>
        
          


         
          <img
          style={{width:24, height:24,  marginTop: 5, marginRight: 14, marginLeft: 14, cursor:'pointer'}}
          src="/images/profile.png"
          onClick={()=>{
            
          
            
          }}
          />
        </div>
       
       

        </div>
  </div>)
     
  } 
  render() { 

    return (
      <div>
      
        <div className="appPC"> {this.renderPC()}</div> 
      </div>
    );
  }
}



class Footer extends Component {
  state = {
  }

  renderPC(){

    return (<div style={{minWidth:1290,width:1290, height: 400, margin:"0px auto",background:"#000000",color:"#FFFFFF", display:"flex", justifyContent:"center",
    alignItems: "center", position:"relative"}}>
          <div
          style={{width:170, marginTop: 10, marginRight: 50, fontSize:25}} 
          onClick={()=>{this.props.history.push("/")}}
          >
          WC
          </div>
          <div>
            
            <div  style={{width:1000,display:"flex", marginTop:10, justifyContent:"space-between"}}>
              <div style={{display:"flex"}}>
                <div style={{fontSize:16, color:"#ccc", marginTop:5, fontFamily:"Noto Sans"}}>
              대표번호 000-000-0000&nbsp;&nbsp;&nbsp;<br />
              E-MAIL baeno@nate.com &nbsp;&nbsp;&nbsp;<br /> 
              <span style={{color:"#666666", fontFamily:"Mark Pro Heavy"}}>Copyright by 배진호, All Right Reserved.</span><br />
                </div>
 
               
              </div>
              <div  style={{width:220, display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
                <div style={{width:220, display:"flex", alignItems:"flex-end"}}>
                    
                  <div style={{width:100, color: '#ccc', textAlign:"right", fontSize:16, cursor:"pointer"}}
                   >
                  이용약관
                  
                  </div>

                  <div style={{width:130, color: '#ccc', textAlign:"right", fontSize:16, cursor:"pointer" }}
                   >
                  
                  개인 정보 보호
                        
                  </div>
                </div>

                <div style={{width:161, display: 'flex',marginLeft:10, marginTop:20, justifyContent:"flex-end"}}>
                 
                <img
                style={{width:40, height:40, marginRight: 4}}
                src="/images/insta.png"
                onClick={()=>{this.props.history.push("/")}}
                />
                </div>
              </div>
             

             
            </div>
          </div>
          
            
    </div>)
     
  } 
  render() { 

    return (
      <div>
        <div className="appPC"> {this.renderPC()}</div> 
      </div>
    );
  }
}
class App extends Component {
  state={}
  render() {
    //const navigation = this.props.navigate();
    
    return <Router>
       <Header ></Header>
       <Routes className="app">
       <Route path="/" element={<HomePage/>}></Route>
       <Route path="/day1" 
                  element={<Day1/>} 
                 />  
                 <Route exact path="/day2" 
                 element={<Day2/>}  
                 />  
    
                 <Route exact path="/day2statesample" 
                  element={<Day2StateSample/>} 
                 />  

                <Route exact path="/mypage" 
                  element={<MyPage/>} 
                 />  
    
                 <Route exact path="/day2dbsample" 
                 element={<Day2DBSample/>} 
                 /> 
    
                 <Route exact path="/day2csssample" 
                  
                 element={<Day2CSSSample/>} 
                 /> 
    
                 <Route exact path="/day2schedule" 
                  
                 element={<Day2Schedule/>} 
                 /> 
    
                 <Route exact path="/day2diary"  
                             element={<Day2Diary/>}  
                             /> 
    
                 <Route exact path="/day2money"  
                             element={<Day2MoneyManage/>}  
                             /> 
                  <Route exact path="/day2photo" 
                      element={<Day2Photo/>}  
                           
                             /> 
                  <Route exact path="/day2login"  
                  element={<Day2Login/>}  
                  />    
                  <Route exact path="/day2lunch"  
                  element={<Day2Lunch/>}  
                  />    
                  <Route exact path="/day2cardview"  
                             element={<Day2Cardview/>}  
                             /> 
    
                 <Route exact path="/day3" 
                   element={<Day3/>}  
                
                 />   
    </Routes>
    <Footer></Footer>
    </Router>
  }
}

/*
class App extends Component {
  state={}
  render() {
    return <div style={{color:"white"}}><Routes className="app">
                 
                 <Route exact path="/" 
                 render={(props) => <HomePage {...props} 
                 />}
                 /> 
    
                 <Route exact path="/day1" 
                 render={(props) => <Day1 {...props}  
                 />}
                 />  
                 <Route exact path="/day2" 
                 render={(props) => <Day2 {...props}  
                 />}
                 />  
    
                 <Route exact path="/day2statesample" 
                 render={(props) => <Day2StateSample {...props}  
                 />}
                 />  
    
                 <Route exact path="/day2dbsample" 
                 render={(props) => <Day2DBSample {...props}  
                 />}
                 /> 
    
                 <Route exact path="/day2csssample" 
                 render={(props) => <Day2CSSSample {...props}  
                 />}
                 /> 
    
                 <Route exact path="/day2schedule" 
                 render={(props) => <Day2Schedule {...props}  
                 />}
                 /> 
    
                 <Route exact path="/day2diary" 
                             render={(props) => <Day2Diary {...props}  
                             />}
                             /> 
    
                 <Route exact path="/day2money" 
                             render={(props) => <Day2MoneyManage {...props}  
                             />}
                             /> 
                  <Route exact path="/day2photo" 
                             render={(props) => <Day2Photo {...props}  
                             />}
                             /> 
                            
    
    
    
                 <Route exact path="/day3" 
                 render={(props) => <Day3 {...props}  
                 />}
                 />   
      
                
                 </Routes></div>
  }
}
*/
 
//  class App extends Component {
//   state = {  
//   }  
//   render() {
//     return <div>gg</div>
//     /*
//     return ( 
//       <Router history={appHistory}>
//           <Route path="/"  
//           render={(props) => <Header {...props} 
//            />}
//             /> 
//           <Routes>
//             <div className="app"> 
//             <Route exact path="/" 
//             render={(props) => <HomePage {...props} 
//             />}
//             /> 

//             <Route exact path="/day1" 
//             render={(props) => <Day1 {...props}  
//             />}
//             />  
//             <Route exact path="/day2" 
//             render={(props) => <Day2 {...props}  
//             />}
//             />  

//             <Route exact path="/day2statesample" 
//             render={(props) => <Day2StateSample {...props}  
//             />}
//             />  

//             <Route exact path="/day2dbsample" 
//             render={(props) => <Day2DBSample {...props}  
//             />}
//             /> 

//             <Route exact path="/day2csssample" 
//             render={(props) => <Day2CSSSample {...props}  
//             />}
//             /> 

//             <Route exact path="/day2schedule" 
//             render={(props) => <Day2Schedule {...props}  
//             />}
//             /> 

//             <Route exact path="/day2diary" 
//                         render={(props) => <Day2Diary {...props}  
//                         />}
//                         /> 

//             <Route exact path="/day2money" 
//                         render={(props) => <Day2MoneyManage {...props}  
//                         />}
//                         /> 
//              <Route exact path="/day2photo" 
//                         render={(props) => <Day2Photo {...props}  
//                         />}
//                         /> 
                        



//             <Route exact path="/day3" 
//             render={(props) => <Day3 {...props}  
//             />}
//             />   
 
//             </div>
            
//             </Routes>
//             <Route path="/" element={Footer} {...this.props} /> 
//       </Router> 
//     );
// */
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header" style={{color:"white"}}>
//           TEST
//       </header>
//     </div>
//   );
// }

export default App;

 
/*

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(App);
*/