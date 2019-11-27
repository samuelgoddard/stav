import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="h-20 md:h-24 items-end flex flex-wrap">
    <div className="w-full">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <Link
            className="block text-black hover:text-primary focus:text-primary transition"
            to="/"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 md:w-40" viewBox="0 0 146 31"><path fill="currentColor" d="M18.32 9.619v19.447h-4.753v-2.548c-.65.967-1.523 1.705-2.62 2.215-1.097.51-2.349.765-3.757.765-2.275 0-4.042-.68-5.301-2.04C.629 26.1 0 24.206 0 21.775V9.619h4.874v11.37c0 1.517.346 2.673 1.036 3.47.69.798 1.7 1.196 3.027 1.196 1.462 0 2.579-.483 3.35-1.45.773-.968 1.158-2.366 1.158-4.196V9.62h4.875zm15.46 0c2.293 0 4.106.724 5.44 2.172 1.333 1.448 2 3.41 2 5.889v11.818h-4.8V18.345c0-1.591-.354-2.798-1.06-3.62-.707-.821-1.754-1.232-3.14-1.232-1.467 0-2.587.489-3.36 1.467-.774.979-1.16 2.407-1.16 4.285v10.253h-4.8v-19.41h4.68v3.483c.506-1.252 1.293-2.224 2.36-2.915 1.066-.692 2.346-1.037 3.84-1.037zm11.365 19.085l6.502-19.726 4.621 1.394-6.502 19.767-4.62-1.435zm6.87-22.291c-1.016 0-1.87-.31-2.561-.93-.691-.62-1.037-1.385-1.037-2.296 0-.885.346-1.638 1.037-2.257.692-.62 1.545-.93 2.561-.93.988 0 1.835.31 2.54.93.706.62 1.059 1.372 1.059 2.257 0 .911-.353 1.676-1.059 2.296-.705.62-1.552.93-2.54.93zm18.557 23.726c-1.45 0-2.758-.276-3.926-.829-1.168-.553-2.033-1.303-2.597-2.25v2.645h-4.51V1.283h4.832V12.77c.51-.948 1.315-1.698 2.416-2.25 1.1-.553 2.362-.83 3.785-.83 1.852 0 3.53.448 5.033 1.343 1.503.895 2.69 2.125 3.563 3.69.872 1.567 1.309 3.297 1.309 5.192s-.437 3.625-1.309 5.19a9.663 9.663 0 01-3.583 3.692c-1.517.895-3.188 1.342-5.013 1.342zm-.564-3.848c1.718 0 3.128-.604 4.232-1.814 1.105-1.21 1.657-2.743 1.657-4.598s-.552-3.388-1.657-4.598c-1.104-1.21-2.514-1.815-4.232-1.815-1.118 0-2.126.276-3.026.827-.9.551-1.602 1.318-2.106 2.299-.504.981-.756 2.077-.756 3.287s.252 2.305.756 3.287c.504.981 1.206 1.748 2.106 2.299.9.55 1.908.826 3.026.826zm33.368-7.214c0 .615-.054 1.243-.162 1.884H88.033c.135 1.657.695 2.973 1.68 3.948.985.975 2.274 1.463 3.866 1.463 1.242 0 2.308-.308 3.198-.922.891-.615 1.458-1.456 1.7-2.525l4.17 1.082c-.188 1.176-.701 2.231-1.538 3.166-.836.935-1.91 1.663-3.218 2.184-1.31.522-2.746.782-4.312.782-2.078 0-3.907-.44-5.485-1.323a9.287 9.287 0 01-3.685-3.727c-.877-1.603-1.315-3.447-1.315-5.53 0-2.005.445-3.815 1.336-5.431.89-1.617 2.118-2.88 3.684-3.788 1.565-.908 3.333-1.362 5.303-1.362 1.917 0 3.63.434 5.142 1.302a9.28 9.28 0 013.542 3.587c.85 1.523 1.275 3.26 1.275 5.21zm-4.58-1.122c0-1.535-.478-2.774-1.434-3.716-.957-.943-2.217-1.414-3.78-1.414-1.428 0-2.613.458-3.556 1.374-.944.915-1.51 2.167-1.698 3.756h10.468zm28.135 1.122c0 .615-.054 1.243-.162 1.884h-15.182c.135 1.657.695 2.973 1.68 3.948.985.975 2.274 1.463 3.866 1.463 1.242 0 2.308-.308 3.199-.922.89-.615 1.457-1.456 1.7-2.525l4.17 1.082c-.19 1.176-.702 2.231-1.539 3.166-.836.935-1.91 1.663-3.218 2.184-1.31.522-2.746.782-4.312.782-2.078 0-3.906-.44-5.485-1.323a9.287 9.287 0 01-3.684-3.727c-.878-1.603-1.316-3.447-1.316-5.53 0-2.005.445-3.815 1.336-5.431.89-1.617 2.118-2.88 3.684-3.788 1.565-.908 3.333-1.362 5.303-1.362 1.917 0 3.63.434 5.142 1.302a9.28 9.28 0 013.542 3.587c.85 1.523 1.276 3.26 1.276 5.21zm-5.235-1.122c0-1.535-.478-2.774-1.435-3.716-.956-.943-2.216-1.414-3.779-1.414-1.428 0-2.614.458-3.557 1.374-.943.915-1.509 2.167-1.697 3.756h10.468zm7.402 7.615l10.346-11.903h-10.55V9.619h16.48v3.928L135.067 25.45h10.837v4.048h-16.807V25.57z"/></svg>
          </Link>

          <nav className="ml-auto">
            <ul className="flex flex-wrap">
              <li>
                <Link
                  activeClassName="is--active"
                  className="link hover:text-primary focus:text-primary mr-6 md:mr-10"
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
