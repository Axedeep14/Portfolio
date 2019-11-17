import React, { Component } from 'react';

class ProfilePage extends Component {
    render() {
        return (
            <div class="profile-page">
      <div class="wrapper">
        <div class="page-header page-header-small" filter-color="green">
          <div class="page-header-image" data-parallax="true" style={{backgroundImage: "url('images/cc-bg-1.jpg')"}}></div>
          <div class="container">
            <div class="content-center">
              <div class="cc-profile-image"><a href="#"><img src="images/ProfilePhoto.jpg" alt="Image"/></a></div>
              <div class="h2 title">Deepak Paliwal</div>
              <p class="category text-white">Web Developer, Android Developer, Guitarist</p><a class="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a class="btn btn-primary" href="https://drive.google.com/uc?export=download&id=1I7WtjKmoz1g2RANg5iAzEsfEG-_HsZ-c" npndata-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
            </div>
          </div>
          <div class="section" >
            <div class="container">
               <div class="button-container"><a class="btn btn-default btn-round btn-lg btn-icon" href="https://www.facebook.com/deepak.paliwal.1042" rel="tooltip" title="Follow me on Facebook"><i class="fa fa-facebook"></i></a><a class="btn btn-default btn-round btn-lg btn-icon" href="https://www.linkedin.com/in/axedeep14/" rel="tooltip" title="Follow me on Linkedin"><i class="fa fa-linkedin"></i></a><a class="btn btn-default btn-round btn-lg btn-icon" href="https://github.com/Axedeep14" rel="tooltip" title="Follow me on GitHub"><i class="fa fa-github"></i></a><a class="btn btn-default btn-round btn-lg btn-icon" href="https://www.instagram.com/deepakpaliwal18/" rel="tooltip" title="Follow me on Instagram"><i class="fa fa-instagram"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
    }
}

export default ProfilePage;