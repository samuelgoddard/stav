import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="h-20 md:h-24 items-end flex flex-wrap">
    <div className="w-full">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <Link
            className="font-bold block sm:text-lg md:text-xl block  bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-3"
            to="/"
          >
            <span className="block sm:hidden">SA</span>
            <span className="hidden sm:block">Student Availability</span>
          </Link>

          <nav className="ml-auto">
            <ul className="flex flex-wrap">
              <li>
                <Link
                  activeClassName="is--active"
                  className="link mr-5"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
              <Link
                activeClassName="is--active"
                className="btn mr-0"
                to="/signup">
                Signup
              </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
