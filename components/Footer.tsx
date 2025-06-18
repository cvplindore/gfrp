"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLoader } from "./LoaderContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
              Join our free, 5-minute newsletter—trusted by 500k+ industry
              professionals to stay ahead in sustainable construction and smart
              material innovations.
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
            <div className="footer_nav-col">
              <h2 className="footer_nav-heading">Pages</h2>
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
            </div>
            <div className="footer_nav-col">
              <h2 className="footer_nav-heading">Legal</h2>
              <ul role="list" className="footer_nav-list">
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
                  href="/"
                  aria-current="page"
                  className="footer_socials-linkblock w-inline-block w--current"
                  // onClick={doReverse}
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
