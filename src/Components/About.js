import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div class="section" id="about">
            <div class="container">
              <div class="card" data-aos="fade-up" data-aos-offset="10">
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <div class="card-body">
                      <div class="h4 mt-0 title">About</div>
                      <p>Enthusiastic Web and App Developer eagerly looking for opportunities to contribute to team success through hard work, attention to detail and organizational skills.</p>
                      <p> Motivated to learn and grow in this industry.</p>
                      <p><a href="https://www.linkedin.com/in/axedeep14/" target="_blank">Learn More</a></p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="card-body">
                      <div class="h4 mt-0 title">Basic Information</div>
                      <div class="row">
                        <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
                        <div class="col-sm-8">20</div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
                        <div class="col-sm-8">deepakkpaliwal@gmail.com</div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
                        <div class="col-sm-8">+918769449558</div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
                        <div class="col-sm-8">B-64,Flat No.F-2, Shankar Vihar-B,Siddarth Nagar,Jaipur,Rajasthan,India-302017</div>
                      </div>
                      {/* <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
                        <div class="col-sm-8">Hindi,English</div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default About;
