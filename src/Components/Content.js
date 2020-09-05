import React, { Component } from 'react'

export class Content extends Component {
    render() {
        console.log(this);
        return (
            <div>
                 <div className="card w-50 mt-5 mx-auto">
                     <div className="card-header" style={{backgroundColor:"blue",
                    color:"#fff",fontWeight:"bold"}}>
                         {this.props.contact.name}
                     </div>
                     <div className="card-body">
                         <ul className="lst-group">
        <li className="list-group-item">{this.props.contact.email}</li>
        <li className="list-group-item">{this.props.contact.phone}</li>
                         </ul>
                     </div>
                 </div>
                
            </div>
        )
    }
}

export default Content;
