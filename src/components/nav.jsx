import { Link, useNavigate } from "react-router-dom";
export default function nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Auctions</Link>
              </li>
              <li>
                <Link to="../auction">Collections</Link>
              </li>
              <li>
                <Link to="../about">How it Works</Link>
              </li>
              <li>
                <Link to="../contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className=" flex items-center">
            <svg
              className="text-black dark:text-white"
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
            <a className="btn btn-ghost text-lg text-pink-400">ARTĒUM</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Auctions</Link>
            </li>
            <li>
              <Link to="../auction">Collections</Link>
            </li>
            <li>
              <Link to="../about">How it Works</Link>
            </li>
            <li>
              <Link to="../contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <button className="btn btn-ghost btn-circle">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <svg
              className="text-black dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
              />
            </svg>
          </button>
          <a
            onClick={() => navigate("/auction")}
            className="ml-3 btn py-2 px-4 cursor-pointer  text-white bg-black rounded-lg"
          >
            Start Bidding
          </a>
        </div>
      </div>
    </>
  );
}
