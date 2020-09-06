import React, { Component } from 'react'

export class Content extends Component {
    constructor(){
        super();
        this.state ={
            isShowing:false
        }
    }
    handleShowHide =() =>{
        // this.state.isShowing = true;
        this.setState({isShowing:!this.state.isShowing});
    }
    handleDelete=() =>{
        this.props.delete(this.props.contact.id);
    }
    render() {
        let cls=this.state.isShowing ? 
        "fas fa-arrow-circle-up  mt-2 mr-3"
        : "fas fa-arrow-circle-down  mt-2 mr-3"
        return (
            <div>
                 <div className="card w-50 mt-5 mx-auto">
                     <div className="card-header" style={{backgroundColor:"blue",
                    color:"#fff",fontWeight:"bold"}}>
                         <h4>
                         <i className={cls} onClick={this.handleShowHide}></i>
                             {this.props.contact.name}
                            <div className="float-right mt-2" >
                             <i className="fas fa-trash mr-3" onClick={this.handleDelete}></i>
                             <i className="fas fa-edit"></i>
                             </div>
                             </h4>
                         
                     </div>
                    {this.state.isShowing ? ( <div className="card-body">
                         <ul className="lst-group">
                              <li className="list-group-item">{this.props.contact.email}</li>
                              <li className="list-group-item">{this.props.contact.phone}</li>
                         </ul>
                     </div>):null}
                 </div>                
            </div>
        )
    }
}

export default Content;
