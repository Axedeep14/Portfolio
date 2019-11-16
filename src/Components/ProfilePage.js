import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

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
              <p class="category text-white">Web Developer, Android Developer, Guitarist</p><a class="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Hire Me</a><a class="btn btn-primary" href="https://doc-0c-38-docs.googleusercontent.com/docs/securesc/iccvkc69erdve9herr4fq57pdskvsglo/uu48hclt3n6tgjmkr28k8t6u7lq1mr5c/1573905600000/05974072735946299152/05974072735946299152/1I7WtjKmoz1g2RANg5iAzEsfEG-_HsZ-c?e=download&authuser=0&nonce=2ccg40aq1obg2&user=05974072735946299152&hash=h2eh5vr59c81uk6mpvkk91l5mk48dai6" npndata-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
            </div>
          </div>
          <div class="section">
            <div class="container">
               <div class="button-container"><SocialIcon url="https://www.facebook.com/deepak.paliwal.1042" /><SocialIcon url="https://www.linkedin.com/in/axedeep14/" /><SocialIcon url="https://github.com/Axedeep14" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
    }
}

export default ProfilePage;