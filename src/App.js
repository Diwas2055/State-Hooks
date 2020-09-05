import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

class App extends React.Component {
  state={
    contact:[
      {id:1,name:"ram",phone:98988658,email:"ram@gmail.com"},
      {id:2,name:"hari",phone:98988758,email:"hari@gmail.com"},
      {id:3,name:"sita",phone:98988958,email:"sita@gmail.com"}
    ],
    showHide:false
  };
  handleClick = () =>{
    // this.state.showHide=true;
    this.setState({showHide: !this.state.showHide})

  }
  render(){
    console.log(this.state.showHide);
    // console.log(this.state.contact);
    // //for loop
    // for(let i=0;i<this.state.contact.length;i++){
    //   console.log(this.state.contact[i])
    // }
  return ( 
  <div > 
    <button type="button" onClick={this.handleClick} >Show</button>
     <Header title="Contact Management System"/>
   {this.state.contact.map((contact)=><Content  
   contact={contact} />
   )}
    
    <Footer/ >
    </div>
  );
}
}

export default App;