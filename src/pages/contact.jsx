import Nav from "../components/nav";
import contacthead from "../assets/contacthead.png";
import Footer from "../components/footer";
export default function contact() {
  const contacts = [
    {
      title: "Phone",
      icon: (
        <svg
          className="text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"
          />
        </svg>
      ),
      detail: "+1 (555) 123-4567",
      note: "Mon - Fri, 9AM - 6PM EST",
    },
    {
      title: "Email",
      icon: (
        <svg
          className="text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z">
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.8s"
              dur="0.5s"
              values="0;1"
            />
          </path>
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="64"
              stroke-dashoffset="64"
              d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="64;0"
              />
            </path>
            <path
              stroke-dasharray="24"
              stroke-dashoffset="24"
              d="M3 6.5l9 5.5l9 -5.5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.6s"
                dur="0.2s"
                values="24;0"
              />
            </path>
          </g>
        </svg>
      ),
      detail: "info@artauctions.com",
      note: "We respond within 24 hours",
    },
    {
      title: "Visit Us",
      icon: (
        <svg
          className="text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8 1a5 5 0 0 0-5 5c0 1.14.56 2.488 1.377 3.934c.827 1.463 1.967 3.107 3.216 4.857l.407.57l.407-.57c1.25-1.75 2.389-3.394 3.216-4.857C12.44 8.488 13 7.14 13 6a5 5 0 0 0-5-5m0 2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"
            clip-rule="evenodd"
          />
        </svg>
      ),
      detail: "123 Gallery Boulevard\nNew York, NY 10013",
      note: "",
    },
    {
      title: "Gallery Hours",
      icon: (
        <svg
          className="text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 0l3 2m-3-7v5"
          />
        </svg>
      ),
      detail: "Tuesday - Sunday",
      note: "10AM - 7PM EST",
    },
  ];
  const departments = [
    {
      title: "Buying & Bidding",
      email: "bidding@artauctions.com",
      description: "Questions about upcoming auctions and how to bid",
    },
    {
      title: "Selling & Consignment",
      email: "consignment@artauctions.com",
      description: "Interested in selling your art collection",
    },
    {
      title: "Appraisals",
      email: "appraisals@artauctions.com",
      description: "Professional artwork valuation services",
    },
    {
      title: "Customer Service",
      email: "support@artauctions.com",
      description: "General inquiries and account assistance",
    },
  ];
  return (
    <>
      <Nav />
      <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${contacthead})` }}
      >
        <div className="container mx-auto flex flex-col gap-3 px-4">
          <h3 className="mt-30 text-4xl  text-white text-shadow-lg/30">
            Get in Touch
          </h3>
          <h2 className="text-white text-shadow-lg/30">
            Whether you're looking to buy, sell, or learn more about our
            auctions,
            <br /> our team of art specialists is here to assist you.
          </h2>
        </div>
      </div>

      <section className=" container flex flex-col md:flex-row items-start mx-auto px-6 py-12 md:gap-10 gap-0">
        <div>
          <div className=" h-full rounded-lg p-6 text-gray-500 text-center">
            <section className="max-w-5xl px-6 py-12 mt-12">
              <div className="text-start mb-10">
                <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-200">
                  Connect With Our Team
                </h2>
                <p className=" text-gray-600 dark:text-gray-300 mt-2">
                  Our specialists are passionate about art and dedicated to
                  providing exceptional service to collectors, sellers, and
                  enthusiasts worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contacts.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start bg-neutral-50 p-6 rounded-lg shadow-sm border-l-4 border-pink-500 hover:-translate-y-1 transition transform duration-300"
                  >
                    <div className=" w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-lg text-gray-800 mb-1 text-start">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 whitespace-pre-line text-start">
                        {item.detail}
                      </p>
                      {item.note && (
                        <p className="text-sm text-gray-500 mt-1 text-start">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className=" bg-white p-8 rounded-lg shadow-lg border border-gray-200 md:w-2xl w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Send us a Message
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form className="space-y-4">
            <div className="flex items-center justify-between gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 text-sm w-full text-black border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="mt-1 w-full text-sm text-black border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-300"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="text-sm mt-1 w-full text-black border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Inquiry Type *
              </label>
              <select
                className="text-sm mt-1 w-full text-gray-500 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-400"
                required
              >
                <option>General Inquiry</option>
                <option>Buying & Bidding</option>
                <option>Selling & consignment</option>
                <option>Appraisal Request</option>
                <option>Press & Media</option>
                <option>Partnership Opportunity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="text-sm mt-1 w-full text-black border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                rows="4"
                placeholder="Please provide details about your inquiry..."
                className="text-sm mt-1 w-full text-black border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition"
            >
              <span>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l9.6 3.84l3.84 9.6a1 1 0 0 0 .9.63a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05M19 24.2l-2.79-7L21 12.41L19.59 11l-4.83 4.83L7.8 13l17.53-6.33Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <section className="md:max-w-6xl max-w-2xl mx-auto  px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-start">
            Departments
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-15 gap-7">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-6 rounded-lg shadow-sm border-l-4 border-pink-500 hover:-translate-y-1 transition transform duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {dept.title}
                </h3>
                <p className="text-sm text-yellow-700 mb-1">{dept.email}</p>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
