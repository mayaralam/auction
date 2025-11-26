export default function footer() {
  return (
    <>
      <footer className="dark:bg-gray-900 bg-white dark:text-gray-300 text-gray-600 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className=" flex items-center">
              <svg
                className="dark:text-white text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    d="m12 13l3 2m-3-2c-4.48 2.746-7.118 1.78-9 .85c0 2.08.681 3.82 1.696 5.15M12 13l3-4.586M15 15c-.219 2.037-1.573 6.185-4.844 7c-1.815 0-3.988-1.07-5.46-3M15 15l2.598-5m0 0l3.278-6.31a1.166 1.166 0 0 0-.524-1.567a1.174 1.174 0 0 0-1.544.47L15 8.414M17.598 10L15 8.414M4.696 19c1.038.167 3.584.2 5.46-1"
                  />
                  <path d="m6 4l.221.597c.29.784.435 1.176.72 1.461c.286.286.678.431 1.462.72L9 7l-.597.221c-.784.29-1.176.435-1.461.72c-.286.286-.431.678-.72 1.462L6 10l-.221-.597c-.29-.784-.435-1.176-.72-1.461c-.286-.286-.678-.431-1.462-.72L3 7l.597-.221c.784-.29 1.176-.435 1.461-.72c.286-.286.431-.678.72-1.462z" />
                </g>
              </svg>
              <a className="btn btn-ghost text-pink-400 text-xl font-bold mb-2">
                ARTĒUM
              </a>
            </div>
            <p className="text-sm">
              Discover extraordinary art from around the world. Where collectors
              and connoisseurs meet exceptional pieces.
            </p>
            <div className="flex items-center gap-5 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#1877f2"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                />
                <path
                  fill="#fff"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect
                    width="256"
                    height="256"
                    fill="url(#SVGWRUqebek)"
                    rx="60"
                  />
                  <rect
                    width="256"
                    height="256"
                    fill="url(#SVGfkNpldMH)"
                    rx="60"
                  />
                  <path
                    fill="#fff"
                    d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                  />
                  <defs>
                    <radialGradient
                      id="SVGWRUqebek"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fd5" />
                      <stop offset=".1" stop-color="#fd5" />
                      <stop offset=".5" stop-color="#ff543e" />
                      <stop offset="1" stop-color="#c837ab" />
                    </radialGradient>
                    <radialGradient
                      id="SVGfkNpldMH"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3771c8" />
                      <stop offset=".128" stop-color="#3771c8" />
                      <stop offset="1" stop-color="#60f" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#fff" rx="60" />
                  <rect width="256" height="256" fill="#1d9bf0" rx="60" />
                  <path
                    fill="#fff"
                    d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 290"><path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"/><path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"/></svg>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-2">Explore</h3>
            <ul className="space-y-1 text-sm">
              <li>Current Auctions</li>
              <li>Upcoming Events</li>
              <li>Past Results</li>
              <li>Private Sales</li>
              <li>Artist Directory</li>
              <li>Collections</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>Sell With Us</li>
              <li>Art Valuation</li>
              <li>Buyer's Guide</li>
              <li>Shipping & Insurance</li>
              <li>Authentication</li>
              <li>Restoration</li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-white font-semibold mb-2">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe to receive exclusive previews and auction updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded dark:bg-gray-800 bg-gray-50 dark:text-white text-black text-sm border border-gray-700 w-full"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm space-y-1 flex items-center justify-around">
          <div className="flex md:flex-row flex-col items-center gap-2">
            <div>
              <svg
                className="text-pink-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
                />
              </svg>
            </div>
            <div className="flex flex-col ">
              <p> 123 Gallery Street</p>
              <p> New York, NY 10013</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <div>
              <svg
                className="text-pink-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                />
              </svg>
            </div>
            <div className="flex flex-col ">
              <p> +1 (555) 123-4567 </p>
              <p> Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <div>
              <svg
                className="text-pink-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
                />
              </svg>{" "}
            </div>
            <div className="flex flex-col ">
              <p>info@artvault.com</p>
              <p>24/7 Support</p>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 ArtVault. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
