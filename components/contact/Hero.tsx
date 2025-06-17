import axios from "axios";
import { useEffect, useState } from "react";



export default function ContactHero() {
    const [contactPage, setContactPage] = useState(null);

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
        <section className="section_hero projects-page contact-page"
            style={{backgroundImage: `url(${contactPage.image})`}}
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
                          Form Label
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
                        Service
                      </label>
                      <select
                        id="Service-2"
                        name="Service"
                        data-name="Service"
                        required
                        className="cc-form_field w-select"
                        style={{ borderColor: "#e7e7e7" }}
                      >
                        <option value="">Select</option>
                        <option value="Solar system installation">
                          Solar system installation
                        </option>
                        <option value="Battery storage solutions">
                          Battery storage solutions
                        </option>
                        <option value="EV charger installation">
                          EV charger installation
                        </option>
                      </select>
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
                      value="Submit"
                      style={{ backgroundColor: "#ff6b35" }}
                    />
                  </form>
                  <div className="contact_success-message w-form-done">
                    <div className="form_success-text">
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="contact_error-bock-message w-form-fail">
                    <div className="foote_error-text">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}