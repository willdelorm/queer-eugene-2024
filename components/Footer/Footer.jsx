"use client";
import { FaInstagram, FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white p-6 text-md">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl mb-6">Queer Eugene</h2>
        <div className="flex justify-between">
          <div>
            <div className="pb-6">
              <a href="/community">Community</a>
            </div>
            <div className="pb-6">
              <a href="/programs">Programs</a>
              <ul className="ps-5">
                <li>
                  <a href="/programs/events">Events</a>
                </li>
                <li>
                  <a href="/programs/trivia">Trivia</a>
                </li>
                <li>
                  <a href="/programs/clothing-program">Clothing Program</a>
                </li>
              </ul>
            </div>
            <div className="pb-6">
              <a href="/education">Education</a>
              <ul className="ps-5">
                <li>
                  <a href="/education/services">Services</a>
                </li>
                <li>
                  <a href="/education/documents">Documents</a>
                </li>
              </ul>
            </div>
            <div className="pb-6">
              <a href="/resources">Resources</a>
              <ul className="ps-5">
                <li>
                  <a href="/resources/organizations">Organizations</a>
                </li>
                <li>
                  <a href="/resources/intersectional">Intersectional</a>
                </li>
                <li>
                  <a href="/resources/learning">Learning</a>
                </li>
                <li>
                  <a href="/resources/healthcare">Healthcare</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="pb-6">
              <a href="/donate">Donate</a>
            </div>
            <div className="pb-6">
              <a href="/about">About</a>
              <ul className="ps-5">
                <li>
                  <a href="/about/story">Story</a>
                </li>
                <li>
                  <a href="/about/people">People</a>
                </li>
                <li>
                  <a href="/about/transparency">Transparency</a>
                </li>
                <li>
                  <a href="/about/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="pt-1">
              <a className="hidden"href="/terms-of-use">Terms of Use</a>
            </div>
            <div className="mb-6">
              <a href="/api/auth/login">Sign In</a>
            </div>
            <div className="flex gap-6 text-4xl">
              <a href="https://www.reddit.com/r/QueerEugene/">
                <FaReddit />
              </a>
              <a href="https://www.instagram.com/queereugene/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p>
            Queer Eugene is a 501(c)(3) non-profit. EIN: 88-3082515
            <br />
            Copyright © 2025, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
