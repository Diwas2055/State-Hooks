import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="card w-50  mx-auto">
                    <div className="card-header" style={{backgroundColor:"blue",
                    color:"#fff"}}>
                        <h3>Contact Form</h3>
                    </div>
                    <div className="card-body">
                    <form action="">
                    <div className="from-group">
                        <label htmlFor="name"></label>
                        <input type="text" placeholder="Name" className="form-control" />
                    </div>
                    <div className="from-group">
                        <label htmlFor="email"></label>
                        <input type="text" placeholder="Email" className="form-control" />
                    </div>
                    <div className="from-group">
                        <label htmlFor="phone"></label>
                        <input type="text" placeholder="Phone" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
