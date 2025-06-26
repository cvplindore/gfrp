"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLoader } from "./LoaderContext";
import axios from "axios";

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   setIsSubmitted(true);
  //   setTimeout(() => setIsSubmitted(false), 3000);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    setError("");

    try {
      const response = await axios.post(
        "https://gfrp-india.onrender.com/api/newsletter_form_view/", // Replace with your actual endpoint
        { email }
      );
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error submitting email:", err);
      setError("Oops! Something went wrong. Please try again.");
    }
  };

  const { setHideLoader } = useLoader();
  
    function doReverse(e) {
      // e.preventDefault();
      setHideLoader(false);
  
      setTimeout(() => {
        setHideLoader(true);
      }, 4000);
    }

  return (
    <footer className="c-footer">
      <div className="footer_wrapper">
        <div className="footer_top-wrapper">
          <div className="footer_logo-form-wrap">
            <Link
              href="/"
              aria-current="page"
              className="footer_linkblock w-inline-block w--current"
              onClick={doReverse}
            >
              <img
                src="https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png"
                loading="lazy"
                alt="solvance logo"
                className="footer_logobrand"
                style={{ marginLeft: "-15px" }}
                // width={200}
                // height={60}
              />
            </Link>
            <p className="footer_brand-subtext">
              Stay updated with the latest in GFRP innovation—join thousands of
              professionals receiving insights on cutting-edge composites,
              construction trends, and next-gen material technologies.
            </p>
            <div className="footer_formblock">
              <form
                // id="wf-form-Subscription-Email"
                // name="wf-form-Subscription-Email"
                // data-name="Subscription Email"
                // method="get"
                className="footer_form"
                // data-wf-page-id="67ea6645891c299018425dd7"
                // data-wf-element-id="fd5342b7-b9fb-d0d8-2595-656bdadffa7a"
                onSubmit={handleSubmit}
              >
                <label htmlFor="Email-2" className="hide">
                  Email
                </label>
                <input
                  className="cc-form_field footer-form w-input"
                  maxLength={256}
                  name="Email-2"
                  data-name="Email 2"
                  placeholder="Enter your email"
                  type="email"
                  id="Email-2"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="footer_form-submit-btn w-button"
                  value="Subscribe"
                  // style={{pointerEvents: 'none'}}
                  disabled={!email}
                  style={{
                    pointerEvents: !email ? "none" : "auto",
                    opacity: !email ? 0.5 : 1,
                  }}
                />
              </form>
              {isSubmitted && (
                <div className="form_message-success w-form-done">
                  <div className="form_success-text">
                    Thank you! Your submission has been received!
                  </div>
                </div>
              )}
              <div className="footer_error-message w-form-fail">
                <div className="foote_error-text">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
            <p className="footer_logobrand-subtext">
              We care about your data in our privacy policy.
            </p>
          </div>
          <div className="footer_nav-list-wrap">
            <div className="footer_nav-col hehe"></div>
            {/* <div className="footer_nav-col">
              <h2 className="footer_nav-heading">Company</h2>
              <ul role="list" className="footer_nav-list">
                <li className="footer_nav-list-item">
                  <Link
                    href="/"
                    aria-current="page"
                    className="footer_nav-link w--current"
                    onClick={doReverse}
                  >
                    Home
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/about"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    About
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/services"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Resources
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/projects"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Products
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/blog"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Blog
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/contact"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="footer_nav-col hehe">
              {/* <h2 className="footer_nav-heading">Legal</h2> */}
            </div>
            <div className="footer_nav-col">
              <h2 className="footer_nav-heading">Company</h2>
              <ul role="list" className="footer_nav-list">
                <li className="footer_nav-list-item">
                  <Link
                    href="/"
                    aria-current="page"
                    className="footer_nav-link w--current"
                    onClick={doReverse}
                  >
                    Home
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/about"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    About
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/services"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Resources
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/projects"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Machine
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/blog"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Blog
                  </Link>
                </li>
                <li className="footer_nav-list-item">
                  <Link
                    href="/contact"
                    className="footer_nav-link"
                    onClick={doReverse}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom-wrapper">
          <p className="footer_copyright-text">
            GFRP INDIA, all rights reserved, 2025
          </p>
          <div className="footer_social-text-wrap">
            <div className="footer_social-heading">Connect with us:</div>
            <ul role="list" className="footer_socials-list">
              <li className="footer_socials-list-item">
                <Link
                  href="https://wa.me/+919530013034"
                  aria-current="page"
                  className="footer_socials-linkblock w-inline-block w--current"
                  // onClick={doReverse}
                >
                  {/* <svg
                    className="footer_socials-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <rect
                      y="0.23999"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#FF6B35"
                    />
                    <g clipPath="url(#clip0_32292_5564)">
                      <path
                        d="M16 8.23999C11.5818 8.23999 8 11.8218 8 16.24C8 19.9917 10.583 23.1398 14.0675 24.0045V18.6848H12.4179V16.24H14.0675V15.1866C14.0675 12.4637 15.2998 11.2016 17.9731 11.2016C18.48 11.2016 19.3546 11.3011 19.7123 11.4003V13.6163C19.5235 13.5965 19.1955 13.5866 18.7882 13.5866C17.4765 13.5866 16.9696 14.0835 16.9696 15.3754V16.24H19.5827L19.1338 18.6848H16.9696V24.1814C20.9309 23.703 24.0003 20.3302 24.0003 16.24C24 11.8218 20.4182 8.23999 16 8.23999Z"
                        fill="#0B0B0B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_32292_5564">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8.23999)"
                        />
                      </clipPath>
                    </defs>
                  </svg> */}
                  <svg
                    className="footer_socials-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="#fff"
                  >
                    {/* <title>whatsapp</title> */}
                    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
                  </svg>
                </Link>
              </li>
              {/* <li className="footer_socials-list-item">
                <Link
                  href="/"
                  aria-current="page"
                  className="footer_socials-linkblock w-inline-block w--current"
                >
                  <svg
                    className="footer_socials-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <rect
                      y="0.23999"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#FF6B35"
                    />
                    <path
                      d="M20.2169 9.50928H22.4659L17.5525 15.1249L23.3327 22.7666H18.8068L15.262 18.132L11.206 22.7666H8.95564L14.211 16.76L8.66602 9.50928H13.3068L16.5109 13.7455L20.2169 9.50928ZM19.4276 21.4205H20.6737L12.6296 10.7847H11.2923L19.4276 21.4205Z"
                      fill="#0B0B0B"
                    />
                  </svg>
                </Link>
              </li>
              <li className="footer_socials-list-item">
                <Link
                  href="/"
                  aria-current="page"
                  className="footer_socials-linkblock w-inline-block w--current"
                >
                  <svg
                    className="footer_socials-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <rect
                      y="0.23999"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#FF6B35"
                    />
                    <g clipPath="url(#clip0_32292_5570)">
                      <path
                        d="M22.8156 8.23999H9.18125C8.52812 8.23999 8 8.75562 8 9.39312V23.0837C8 23.7212 8.52812 24.24 9.18125 24.24H22.8156C23.4688 24.24 24 23.7212 24 23.0869V9.39312C24 8.75562 23.4688 8.23999 22.8156 8.23999ZM12.7469 21.8744H10.3719V14.2369H12.7469V21.8744ZM11.5594 13.1962C10.7969 13.1962 10.1813 12.5806 10.1813 11.8212C10.1813 11.0619 10.7969 10.4462 11.5594 10.4462C12.3188 10.4462 12.9344 11.0619 12.9344 11.8212C12.9344 12.5775 12.3188 13.1962 11.5594 13.1962ZM21.6344 21.8744H19.2625V18.1619C19.2625 17.2775 19.2469 16.1369 18.0281 16.1369C16.7937 16.1369 16.6062 17.1025 16.6062 18.0994V21.8744H14.2375V14.2369H16.5125V15.2806H16.5437C16.8594 14.6806 17.6344 14.0462 18.7875 14.0462C21.1906 14.0462 21.6344 15.6275 21.6344 17.6837V21.8744Z"
                        fill="#0B0B0B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_32292_5570">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 8.23999)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
