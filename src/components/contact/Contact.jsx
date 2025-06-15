import React, { useState } from "react";
import { motion } from "framer-motion"; 
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Submit = (e) => {
    e.preventDefault(); 

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbwg_HbWfxOGuY_CILww_i4CPIm-xkAmNEvHTrxu1rYaNJlIh3YIt9JZJp4cQQMkHKpItQ/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then(() => {
        setFormData({
          name: "",
          email: "",
          project: "",
        });
      })
      .catch((error) => { 
        setFormData({
          name: "",
          email: "",
          project: "",
        });
      });
  };

  return (
    <motion.section
      className="contact section"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <motion.div
              className="contact__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                sewuminijayawardana23@gmail.com
              </span>

              <a
                href="mailto:sewuminijayawardana23@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>

            <motion.div
              className="contact__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+94 77 202 9985</span>

              <a href="https://wa.me/94772029985" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="contact__content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="contact__title">Write me your project</h3>

          <motion.form
            className="contact__form"
            id="form"
            onSubmit={Submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </motion.div>

            <motion.div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </motion.div>

            <motion.div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Description</label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your description"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="button button--flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Send Message <i className="bx bxs-send button__icon"></i>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
