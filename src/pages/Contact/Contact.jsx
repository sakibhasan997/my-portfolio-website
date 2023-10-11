import React, { useRef } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Contact.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ln375dt",
        "template_349tfdp",
        form.current,
        "IaFxA-8qOCmn3zlu4"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Massage has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state?.from || '/', { replace: true });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  Aos.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid" data-aos="fade-right">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">sakibhasan4772@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">(+880) 1626384772</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <Link
              to="https://www.facebook.com/profile.php?id=100035207767398"
              target="_blank"
              className="contact__social-link">
              <FaFacebookF />
            </Link>

            <Link
              to="https://github.com/sakibhasan997"
              target="_blank"
              className="contact__social-link">
              <FaGithub />
            </Link>

            <Link
              to="https://www.linkedin.com/in/sakib-hasan-9a0286229/"
              target="_blank"
              className="contact__social-link">
              <FaLinkedin />
            </Link>
            {/* <Link to="https://www.facebook.com/profile.php?id=100035207767398" className="contact__social-link">
                        <FaDribbble/>
                    </Link> */}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group" data-aos="fade-left">
            <div className="form__input-div">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="user_subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
              required></textarea>
          </div>

          <button type="submit" value="Send" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
