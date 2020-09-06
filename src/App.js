import React from 'react';
import './App.css';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  };
  handleDelete=(id)=>{
    // console.log(id);
    
    let filterData= this.state.contact.filter(function(contact){
      return contact.id !== id
    })
    

     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.setState({contact: filterData});
        toast.success("Sucessfully Deleted ?");
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
  };
    render(){    
  return ( 
  <div>     
     <Header title="Contact Management System"/>
     <Footer />
     {/* where delete is attribute and handleDelete is the property */}
   {this.state.contact.map((contact)=><Content  
   contact={contact}  delete={this.handleDelete} key={contact.id}/>
   )}   
   <ToastContainer /> 
    </div>
  );
}
}

export default App;