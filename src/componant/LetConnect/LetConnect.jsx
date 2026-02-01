import React from "react";
import "./LetConnect.css";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import PrimaryButton from "../Button/PrimaryButton.jsx";

const LetConnect = () => {
  const sectionInfo = {
    title: "Let's Connect",
    brief:
      "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.",
  };

  return (
    <section className="ls-contact-section ">
      <div className="ls-contact-container">
        {/* الـ div الأول: الرأسية (العنوان والوصف) */}
        {/* <div className="ls-contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="body">
            We're excited to connect with you and learn more about your real
            estate goals. Use the form below to get in touch with Estatein.
            Whether you're a prospective client, partner, or simply curious
            about our services, we're here to answer your questions and provide
            the assistance you need.
          </p>
        </div> */}

        <SectionHeader
          sectionTitle={sectionInfo.title}
          sectionBrief={sectionInfo.brief}
        />

        {/* الـ div الثاني الأساسي: يحتوي على كل شيء في السكشن السفلي */}
        <div className="ls-contact-content-wrapper">
          <form
            className="ls-connect-form"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* الـ div الأول من القسم الثاني (يحتوي على 3 divs داخلية) */}
            <div className="ls-form-fields-container">
              {/* 1- أول div فيه 3 inputs */}
              <div className="ls-form-row-three">
                <div className="ls-input-group">
                  <label className="subheading-3">First Name</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>

                <div className="ls-input-group">
                  <label className="subheading-3">Last Name</label>
                  <input type="text" placeholder="Enter Last Name" />
                </div>

                <div className="ls-input-group">
                  <label className="subheading-3">Email</label>
                  <input type="email" placeholder="Enter your Email" />
                </div>
              </div>

              {/* 2- تاني div فيه 1 input مع 2 select */}
              <div className="ls-form-row-mixed">
                <div className="ls-input-group">
                  <label className="subheading-3">Phone</label>
                  <input type="tel" placeholder="Enter Phone Number" />
                </div>

                <div className="ls-input-group">
                  <label className="subheading-3">Inquiry Type</label>
                  <select>
                    <option value="">Select Inquiry Type</option>
                    <option value="buy">Buying</option>
                    <option value="sell">Selling</option>
                  </select>
                </div>

                <div className="ls-input-group">
                  <label className="subheading-3">
                    How Did You Hear About Us?
                  </label>
                  <select>
                    <option value="">Select</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend</option>
                  </select>
                </div>
              </div>

              {/* 3- تالت div فيه الـ textarea للمسج */}
              <div className="ls-form-row-message">
                <div className="ls-input-group">
                  <label className="subheading-3">Message</label>
                  <textarea placeholder="Enter your Message here.."></textarea>
                </div>
              </div>
            </div>

            {/* الـ div الثاني من القسم الثاني (فيه الـ checkbox وزر الإرسال) */}
            <div className="ls-form-footer-container">
              <div className="ls-checkbox-group">
                <input type="checkbox" id="ls-terms" />
                <label htmlFor="ls-terms" className="body">
                  I agree with <span>Terms of Use </span> and{" "}
                  <span>Privacy Policy</span>
                </label>
              </div>

              <PrimaryButton
                buttonLabel="Send Your Message"
                buttonType="submit"
              />

              {/* <button type="submit" className="ls-send-btn button">
                Send Your Message
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetConnect;
