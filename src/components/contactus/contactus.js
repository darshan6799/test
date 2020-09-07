import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work regarding Website Development 
              </p>
            </div>
          </div>
          <div className="row">
                  <div className="columns contact-details">

                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <span><a href="tel: +919427220930">+91 9427220930</a></span>
                    <br></br>
                    <span><a href="mailto: darshanunadkat67@gmail.com">darshanunadkat67@gmail.com</a></span>
       					   </p>
                  </div>
               </div>
          
        </section>
        );
  }
}
