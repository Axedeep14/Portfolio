import React, { Component } from 'react';

class References extends Component {
    render() {
        return (
            <div class="section" id="reference">
      <div class="container cc-reference">
        <div class="h4 mb-4 text-center title">Education</div>
        <div class="card" data-aos="zoom-in">
          <div class="carousel slide" id="cc-Indicators" data-ride="carousel">
            <ol class="carousel-indicators">
              <li class="active" data-target="#cc-Indicators" data-slide-to="0"></li>
              <li data-target="#cc-Indicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-1.jpg" alt="Image"/>
                    <div class="h5 pt-2">Dual Degree</div>
                    <p class="category">2017 - 2022</p>
                  </div>
                  <div class="col-lg-10 col-md-9">
                    <div class="h5" >Master of Business Administration and Bachelor of Information Technology</div>
                    <p class="category">Atal Bihari Vajpayee-IIITM , Gwalior</p>
                    <p style={{textAlign : "left"}}>Presently in 3rd year of engineering in Information Technology with CGPA of 8.67 and in top 5% of my batch.I was Event Organizer of CORNA (THE Band Wars) in Aurora 2k18 and now Event Head of StepUp (Dance Competition) in Aurora 2k20.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-2.jpg" alt="Image"/>
                    <div class="h5 pt-2">High School</div>
                    <p class="category">2010 - 2017</p>
                  </div>
                  <div class="col-lg-10 col-md-9">
                  <div class="h5">Science and Mathematics</div>
                <p class="category">Bharatiya Vidya Bhavan Vidyashram, Jaipur </p>
                <p style={{textAlign : "left"}}>Graduated class 10th with CGPA of 9.6 and class 12th with 93.6% in CBSE board examination. I was elected for Prefectorial Council of School from class 6th onwards till class 12th. I was subject topper in class 12th boards examination in Information Technology, Chemistry and Physics. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
    }
}

export default References;