import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div class="section" id="contact">
      <div class="cc-contact-information" style={{ backgroundRepeat: "space", backgroundImage: "url('images/Map.png')"}}>
        <div class="container">
          <div class="cc-contact">
            <div class="row">
              <div class="col-md-9">
                <div class="card mb-0" data-aos="zoom-in">
                  <div class="h4 text-center title">Contact Me</div>
                  <div class="row">
                     <div class="col-md-6"> 
                       <div class="card-body">
                       <img src="images/Contact.jpg" alt="Image" height ="280"/>
                      </div> 
                     </div>
                     <div class="col-md-6" >
                      <div class="card-body">
                        <p class="mb-0" style={{textAlign : "center"}}><strong>College Address </strong></p>
                        <p class="pb-2" style={{textAlign : "center"}}>Room No.255,BH-1,ABV-IIITM,Gwalior,Madhya Pradesh,India-474010</p>
                        <p class="mb-0" style={{textAlign : "center"}}><strong>Home Address </strong></p>
                        <p class="pb-2" style={{textAlign : "center"}}>B-64,Flat No.F-2, Shankar Vihar-B,Siddarth Nagar,Jaipur,Rajasthan,India-302017</p>
                        <p class="mb-0" style={{textAlign : "center"}}><strong>Phone</strong></p>
                        {/* <p class="pb-2" style={{textAlign : "center"}}>+918769449558</p> */}
                        <a href="callto:+918769449558">+918769449558</a>
                        <p class="mb-0" style={{textAlign : "center"}}><strong>Email</strong></p>
                        <a href="mailto:deepakkpaliwal@gmail.com">deepakkpaliwal@gmail.com</a>
                      </div>
                     </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
          <div class="container text-center"><a class="cc-facebook btn btn-link" href="https://www.facebook.com/deepak.paliwal.1042"><i class="fa fa-facebook fa-2x " aria-hidden="true"></i></a><a class="cc-twitter btn btn-link " href="https://twitter.com/1834671797d344b"><i class="fa fa-twitter fa-2x " aria-hidden="true"></i></a><a class="cc-instagram btn btn-link" href="https://www.instagram.com/deepakpaliwal18/"><i class="fa fa-instagram fa-2x " aria-hidden="true"></i></a></div>
          <div class="h4 title text-center">DEEPAK PALIWAL</div>
          <div class="text-center text-muted">
          <p>&copy; Axedeep14.<br/> All rights reserved.</p>
          </div>
        </footer>
    </div>
        );
    }
}

export default Contact;