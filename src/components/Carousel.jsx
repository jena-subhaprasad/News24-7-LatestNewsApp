import React, { Component } from 'react'

export class Carousel extends Component {
    

    render() {
        return (
            <>
                {/* <div className="container"> */}
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                         <div className="carousel-inner">

                            <div className="item active">
                               <a href={this.props.fart.url}> <img src={this.props.fart.urlToImage} alt="Los Angeles" style={{width:"100%",height:"430px"}} /></a>
                                <div className="carousel-caption">
                                    <h3>{this.props.fart.title}</h3>
                                   
                                </div>
                            </div>

                            <div className="item">
                               <a href={this.props.sart.url}> <img src={this.props.sart.urlToImage} alt="Chicago" style={{width:"100%",height:"430px"}} /></a>
                                <div className="carousel-caption">
                                    <h3>{this.props.sart.title}</h3>
                                    
                                </div>
                            </div>

                            <div className="item">
                                <a href={this.props.tart.url}><img src={this.props.tart.urlToImage} alt="New York" style={{width:"100%",height:"430px"}} /></a>
                                <div className="carousel-caption">
                                    <h3>{this.props.tart.title}</h3>
                                    
                                </div>
                            </div>

                        </div>


                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                {/* </div> */}

            </>
        )
    }
}

export default Carousel