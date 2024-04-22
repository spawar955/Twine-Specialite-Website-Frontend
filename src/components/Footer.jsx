import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <>
    <div className="ffooter">
      

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Home no: 394,<br />
                  Near PICT College, <br />
                  Pune, Maharashtra <br />
                  Pincode: 411046
                </address>
                <a
                  href="tel:+91 9503891555"
                  className="d-block mb-2 text-white"
                >
                  +91 1234567890
                </a>
                <a
                  href="mailto:devconer@gmail.com"
                  className="d-block mb-2 text-white"
                >
                  abcd@gmail.com
                </a>

                <div className="social_icons d-flex align-items-center gap-30">
                  <a className="text-white" href="">
                    <BsLinkedin className="text-white fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="text-white fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsFacebook className="text-white fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="text-white fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">
                  Term's and conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">FAQ's</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links">
                <Link className="text-white py-2 mb-1">Product 1</Link>
                <Link className="text-white py-2 mb-1">Product 2</Link>
                <Link className="text-white py-2 mb-1">Product 3</Link>
                <Link className="text-white py-2 mb-1">Product 4</Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Powered by Twine
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Footer;
