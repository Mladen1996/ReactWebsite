import React from 'react';
import styled from 'styled-components';
import {FaChevronDown,FaChevronUp} from 'react-icons/fa';

export const TabComponent = styled.div`
.title{
  padding:5px;
  color:white;
  width:90%;
  cursor: pointer;
  @media (max-width: 768px) {
    width:95%;
}
}
img{
  width: 50px;
  height: 50px;
}
.content{
  font-size: 1.6rem;
  line-height: 24px;
  font-family: 'Open Sans', sans-serif;
   width:90%;
   transition: all 0.6s ease-out;
   overflow: hidden;

 }
 span{
  display:flex;
  align-items: center;
  font-size:1.8rem;
}

 .jc-btwn{
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius:3px;
}

.backgroundShow{
  background-image: linear-gradient(to right, rgb(122, 42, 82) 0%, rgb(232, 17, 75) 100%) !important;
}
.backgroundHide{
  background-color: #353655;
}
.flex{
  display:flex;
}

.show{
  max-height: 350px;
}

.hide{
  max-height: 0;
}
`;
export const AccordionComponent = styled.div`
margin-top: 20px;
`;

export const ChevronUp=styled(FaChevronUp)`
font-size: 20px;
padding-top: 15px;
padding-right: 10px;
`;
export const ChevronDown=styled(FaChevronDown)`
font-size: 20px;
padding-top: 15px;
  padding-right: 10px;
`;
class Tab extends React.Component{
    render(){
        return(
          <TabComponent>
             <div className={this.props.active ? "title flex jc-btwn backgroundShow" : "title flex jc-btwn backgroundHide"}
             onClick={()=>{
           this.props.handleclick(this.props.id)
           }}>
               
               <span><img src={this.props.img} alt="icon"/>{this.props.title}</span>
           
             {this.props.active ?  <ChevronUp/> : <ChevronDown/>}
             </div>
           <div className={this.props.active ? "content show" : "content hide"}>
              {this.props.content}
           </div>
          </TabComponent>
      )
    }
  }
   class Accordion extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
          tabs: props.accordion,
         
      }
      this.handleTabClick = this.handleTabClick.bind(this);
      this.updateTabs = this.updateTabs.bind(this);
    }
    
    updateTabs(id){
        let tabs  = this.state.tabs;
      let newtabs = tabs.map((tab, index)=>{
        if(tab.id === id){
          if(tab.active === true){
              tab.active = false;
          }else{
              tab.active = true;

          }
        }else{
          tab.active = false;
        }
        return tab;
      });
      return newtabs;
    }
    
    handleTabClick(id){
      this.setState({tabs: this.updateTabs(id)});
   
    }
    
    render() {
        const tabsArray = this.state.tabs;
      return (
      
          <AccordionComponent>
             {
                    tabsArray.map((tab,index)=>{
                    return <Tab key={index} id={tab.id} handleclick={this.handleTabClick} img={tab.img} title={tab.title} content={tab.content} active={tab.active} /> 
                })
             }
          </AccordionComponent>
        
      )
    }
  }

  const AccordionFull = ({accordion}) => (

    <Accordion accordion={accordion}/>

);

export default AccordionFull;