import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

export class NewsItems extends Component {

    render() {
        let { title, description,imageurl } = this.props;//add props inside render
        return (<>
            <div className="card shadow p-3 mb-5 bg-white rounded" >
                <img src={imageurl?imageurl:"https://freepikpsd.com/file/2019/10/no-image-png-5-Transparent-Images.png"} className="card-img-top" alt="..." 
                style={{ height:"230px"}} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description?description.slice(0,162):null}</p>
                    <p className="card-text"><small className="text-muted">By {this.props.author} on {new Date(this.props.time).toLocaleString()}</small></p>
                    <a rel="noreferrer" href={this.props.url} className="btn btn-sm btn-dark" target="_blank">READ MORE...</a>
                </div>
            </div>
            
        </>
        )
    }
}

export default NewsItems