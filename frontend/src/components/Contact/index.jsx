import React from "react";
import "./styles.css";
function Contact_Component() {
  return (
    <div className="contact-container"
    style={{marginTop:"50px"}}
    >
      <div className="container">
        <div className="contact-left-container">
          <div className="contact-left-title" >
            <h2> CONTACT US</h2>
          </div>
          <form className="contact-left-form" >
            <div className="contact-form-container">
              <div className="contact-form-container-header">
                <div className="contact-form-content">
                  <label className="contact-form-label">Name</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="contact-form-content">
                  <label className="contact-form-label">Phone</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="contact-form-container-header">
                <div className="contact-form-content">
                  <label className="contact-form-label">Email</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Your email"
                  />
                </div>
                <div className="contact-form-content">
                  <label className="contact-form-label">Subject</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="contact-form-container-header">
                <div
                  className="contact-form-content"
                  style={{ width: "100%", height: "156px" }}
                >
                  <label className="contact-form-label">Message</label>
                  <input
                    className="contact-fomr-input"
                    type="text"
                    name="name"
                    placeholder="Your Message..."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-right-container">
          <div className="contact-right-title" style={{ paddingLeft: '40px'}}>
            <h2>GET IN TOUCH</h2>
          </div>
          <div className="contact-right-content">
            <ul class="contact-info upper">
              <li>
                <span>ADDRESS:</span> Đại học Công Nghệ Thông Tin, Linh Trung ,Thủ Đức
              </li>
              <li>
                <span>EMAIL:</span> example@site.com, contact@site.com
              </li>
              <li>
                <span>WEB:</span> www.site.com
              </li>
              <li>
                <span>PHONE:</span> +84 (070) <strong>333-4444</strong> , +84 (090){" "}
                <strong>999-999</strong>
              </li>
              <li>
                <span>FAX:</span>
                <strong>+84 123456789</strong>
              </li>
            </ul>
          </div>
          <div class="social_media" style={{ paddingLeft: '40px'}}>
            <a class="facebook" >
              <i class="fa fa-facebook"></i>
            </a>
            <a class="twitter" >
              <i class="fa fa-twitter"></i>
            </a>
            <a class="googleplus" >
              <i class="fa fa-google-plus"></i>
            </a>
            <a class="pinterest" >
              <i class="fa fa-pinterest"></i>
            </a>
            <a class="linkedin" >
              <i class="fa fa-linkedin"></i>
            </a>
            <a class="youtube" >
              <i class="fa fa-youtube"></i>
            </a>
            <a class="instagram" >
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Component;
