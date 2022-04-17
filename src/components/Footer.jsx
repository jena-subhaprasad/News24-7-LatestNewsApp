import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
     <>

<div className="footer-dark bg-dark">
    <footer>
        <div className="container ">
            <div className="row">
    <div className="col item social">
      <a href="https://www.facebook.com/">
        <i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com/login?lang=en">
          <i className="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/subhaprasad-jena-016496205/">
          <i className="fa fa-linkedin"></i></a>
        <a href="/"><i className="fa fa-instagram"></i></a><a href="https://mail.google.com/"><i className="fa fa-google"></i>
        </a>
        </div>
            </div>
            <p className="copyright" style={{marginTop:"10px"}} >www.jenasubhaPrasad.com © 2021</p>
        </div>
    </footer>
</div>
</>
    )
  }
}
