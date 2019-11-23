import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="py-16 md:py-20">
    <div className="container">
      <div className="flex flex-wrap items-center">
        <Link
          className="font-bold block text-lg inline-block mb-4 md:mb-0 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-3"
          to="/"
        >
          <span className="block md:hidden">SA</span>
          <span className="hidden md:block">Student Availability</span>
        </Link>

        <nav className="w-full sm:w-auto ml-auto">
          <ul className="flex flex-wrap items-center">
            <li>
              <Link
                activeClassName="is--active"
                className="link mr-5 lg:mr-8"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="link mr-5 lg:mr-8"
                to="/terms-conditions"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="link mr-5 lg:mr-8"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
            <Link
              activeClassName="is--active"
              className="link mr-0"
              to="/signup">
              Signup
            </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
)

export default Footer
