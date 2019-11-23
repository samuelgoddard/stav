import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="h-16 md:h-24 items-end flex flex-wrap">
    <div className="w-full">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <Link className="font-bold block text-lg md:text-xl inline-block" to="/">
            {siteTitle}
          </Link>

          <nav className="ml-auto">
            <ul className="flex flex-wrap">
              <li>
                <Link
                  activeClassName="is--active"
                  className="link mr-3"
                  to="/about">
                    About
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="is--active"
                  className="link mr-3"
                  to="/">
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header