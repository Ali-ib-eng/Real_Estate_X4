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
    <section className="ls-contact-section za-spacing">
      <div className="ls-contact-container">
        <SectionHeader
          sectionTitle={sectionInfo.title}
          sectionBrief={sectionInfo.brief}
        />

        <form className="ls-contact-form">
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
          </div>
        </form>
      </div>
    </section>
  );
};

export default LetConnect;
