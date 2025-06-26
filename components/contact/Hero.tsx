"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";



export default function ContactHero() {
  const [contactPage, setContactPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const formData = {
      first_name: (e.currentTarget["First-name"] as HTMLInputElement).value,
      last_name: (e.currentTarget["Last-name"] as HTMLInputElement).value,
      email_address: (e.currentTarget["Email"] as HTMLInputElement).value,
      phone: (e.currentTarget["Phone"] as HTMLInputElement).value,
      city: (e.currentTarget["City"] as HTMLInputElement).value,
      message: (e.currentTarget["Message"] as HTMLTextAreaElement).value,
    };

    try {
      const res = await axios.post(
        "https://gfrp-india.onrender.com/api/contact_form_view/",
        formData
      );
      setSuccessMsg("Thank you! Your submission has been received!");
      // e.currentTarget.reset();
      formRef.current?.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setErrorMsg("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      axios
        .get("https://gfrp-india.onrender.com/api/get_contact/") // your Django endpoint
        .then((response) => {
          setContactPage(response.data); // it's a single object, not an array
        })
        .catch((error) => {
          console.error("Error fetching hero section:", error);
        });
    }, []);

  if (!contactPage) return;


    return (
      <section
        className="section_hero projects-page contact-page"
        style={{ backgroundImage: `url(${contactPage.image})` }}
      >
        <div className="padding-global padding-0">
          <div className="container-large">
            <div className="hero_wrapper projects-page">
              <div className="contact-hero_left-container">
                <div className="contact-hero_top-content-wrap">
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      //   style="background-color: #ff6b35 !important"
                      style={{ backgroundColor: "#ff6b35 !important" }}
                    ></div>
                    <div className="about-us_heading">CONTACT</div>
                  </div>
                  <h1 className="contact-hero_main-heading cc-heading-h2">
                    {contactPage.title}
                  </h1>
                  <p className="contact-hero_subtext cc-title-small">
                    {contactPage.description}
                  </p>
                </div>
                <div className="contact-hero_bottom-content-wrap">
                  <div className="contact-hero_details-wrap">
                    {/* <img
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebef29b64affed6df906e9_Vector.svg"
                      loading="lazy"
                      alt=""
                      className="contact-hero_details-icon"
                    /> */}
                    <div className="contact-hero_details-col">
                      <div
                        className="contact-hero_details-heading"
                        style={{ color: "#ff6b35" }}
                      >
                        Phone
                      </div>
                      <a
                        href="tel:(252)555-0126"
                        className="contact-hero_details-text"
                      >
                        {contactPage.phone}
                      </a>
                    </div>
                  </div>
                  <div className="contact-hero_details-wrap">
                    <div className="contact-hero_details-col">
                      <div
                        className="contact-hero_details-heading"
                        style={{ color: "#ff6b35" }}
                      >
                        Email
                      </div>
                      <a
                        href="mailto:hello@gfrp.com?subject=New%20Project%20Request"
                        className="contact-hero_details-text"
                      >
                        {contactPage.email_address}
                      </a>
                    </div>
                  </div>
                  <div className="contact-hero_details-wrap">
                    <div className="contact-hero_details-col">
                      <div
                        className="contact-hero_details-heading"
                        style={{ color: "#ff6b35" }}
                      >
                        Address
                      </div>
                      <a
                        href="https://www.google.com/maps/search/2464+Royal+Ln.+Mesa,+New+Jersey+45463/@36.0229575,-96.2710454,5z/data=!3m1!4b1?entry=ttu&amp;g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                        target="_blank"
                        className="contact-hero_details-text"
                      >
                        {contactPage.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-hero_right-container">
                <div className="contact-formblock">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    className="contact-form"
                    data-wf-page-id="67ebecb112a8e5bd7f4bd393"
                    data-wf-element-id="d499c54f-7670-6225-41dc-d874069fdc47"
                    onSubmit={handleSubmit}
                    ref={formRef}
                  >
                    <div className="contact-form_row">
                      <div className="contact_form_field-wrapper">
                        <label htmlFor="First-name" className="cc-form_label">
                          First name
                        </label>
                        <input
                          className="cc-form_field w-input"
                          name="First-name"
                          data-name="First name"
                          placeholder="John"
                          type="text"
                          id="First-name"
                          required
                        />
                      </div>
                      <div className="contact_form_field-wrapper">
                        <label htmlFor="Last-name" className="cc-form_label">
                          Last name
                        </label>
                        <input
                          className="cc-form_field w-input"
                          name="Last-name"
                          data-name="Last name"
                          placeholder="Smith"
                          type="text"
                          id="Last-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="contact-form_row">
                      <div className="contact_form_field-wrapper">
                        <label htmlFor="Email-3" className="cc-form_label">
                          Email
                        </label>
                        <input
                          className="cc-form_field w-input"
                          name="Email"
                          data-name="Email"
                          placeholder="john@company.com"
                          type="email"
                          id="Email-3"
                          required
                        />
                      </div>
                      <div className="contact_form_field-wrapper">
                        <label htmlFor="Phone" className="cc-form_label">
                          Phone
                        </label>
                        <input
                          className="cc-form_field w-input"
                          name="Phone"
                          data-name="Phone"
                          placeholder="(000)-000-0000"
                          type="tel"
                          id="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="contact_form_field-wrapper">
                      <label htmlFor="Service-2" className="cc-form_label">
                        City
                      </label>
                      <input
                        className="cc-form_field w-input"
                        name="City"          
                        data-name="City"
                        placeholder="Mumbai"
                        type="text"
                        id="City"
                        required
                      />
                      {/* <select
                        id="Service-2"
                        name="Service"
                        data-name="Service"
                        required
                        className="cc-form_field w-select"
                        style={{ borderColor: "#e7e7e7" }}
                      >
                        <option value="">Select</option>
                        <option value="GFRP machine">GFRP machine</option>
                        <option value="some other">some other</option>
                        <option value="new machine">new machine</option>
                      </select> */}
                    </div>
                    <div className="contact_form_field-wrapper">
                      <label htmlFor="Message" className="cc-form_label">
                        Message
                      </label>
                      <textarea
                        required
                        placeholder="Type here..."
                        id="Message"
                        name="Message"
                        data-name="Message"
                        className="cc-form_field text-area w-input"
                        style={{ borderColor: "#e7e7e7" }}
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="contact-form_submit-btn w-button"
                      value={loading ? "Submitting..." : "Submit"}
                      disabled={loading}
                      // style={{
                      //   backgroundColor: "#ff6b35",
                      //   pointerEvents: "none",
                      //   cursor: "not-allowed",
                      // }}
                      style={{
                        backgroundColor: loading ? "#ccc" : "#ff6b35",
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    />
                  </form>
                  {/* <div className="contact_success-message w-form-done">
                    <div className="form_success-text">
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="contact_error-bock-message w-form-fail">
                    <div className="foote_error-text">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div> */}
                  {successMsg && (
                    <div className="contact_success-message w-form-done">
                      <div className="form_success-text">{successMsg}</div>
                    </div>
                  )}
                  {errorMsg && (
                    <div className="contact_error-block-message w-form-fail">
                      <div className="footer_error-text">{errorMsg}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}