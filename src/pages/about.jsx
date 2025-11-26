import Nav from "../components/nav";
import abouthead from "../assets/abouthead.png";
import { useNavigate } from "react-router-dom";
import story from "../assets/story.png";
import foot from "../assets/foot.png";
import end from "../assets/end.png";
import Footer from "../components/footer";
export default function about() {
    const navigate = useNavigate();
   const values = [
    {
      title: "Curated Excellence",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 512 512"><path fill="none" stroke="#fc4de8" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z"><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-15 256 256; 15 256 256; -15 256 256"/><animate attributeName="opacity" dur="6s" values="1; .75; 1; .75; 1; .75; 1"/></path></svg>,
      description:
        "Every piece is carefully vetted by our team of art historians and specialists, ensuring authenticity and quality.",
    },
    {
      title: "Trust & Transparency",
      icon: <svg className="text-pink-400" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.467 20.82a.88.88 0 0 0 1.066 0C14.168 19.593 19 15.586 19 11.016v-4.93a.514.514 0 0 0-.457-.515a12.05 12.05 0 0 1-5.582-2.046l-.61-.417a.62.62 0 0 0-.702 0l-.61.417a12.05 12.05 0 0 1-5.582 2.046a.514.514 0 0 0-.457.515v4.93c0 4.57 4.832 8.577 6.467 9.802"/></svg>,
      description:
        "We provide complete provenance documentation and condition reports, so you bid with confidence.",
    },
    {
      title: "Community First",
      icon: <svg className="text-pink-400" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48"><path fill="currentColor" d="M17 24c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m22-3.5c0 3.039-2.461 5.5-5.5 5.5a5.5 5.5 0 0 1-5.5-5.5c0-3.039 2.461-5.5 5.5-5.5s5.5 2.461 5.5 5.5M17 26c2.734 0 7.183.851 10.101 2.545C28.293 29.758 29 31.081 29 32.4V38H4v-5.6c0-4.256 8.661-6.4 13-6.4m27 12H31v-5.6c0-1.416-.511-2.72-1.324-3.883c1.541-.344 3.058-.517 4.217-.517C37.62 28 44 29.787 44 33.333z"/></svg>,
      description:
        "Our thriving community of 50,000+ collectors and artists drives everything we do, from features to curation.",
    },
    {
      title: "Global Reach",
      icon: <svg className="text-pink-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 2048 2048"><path fill="currentColor" d="M496 883q13 0 29 4t32 11t32 13t29 12l-16 2q-8 1-17 1q-17 0-31-5t-26-13t-24-12t-22-6q-10 0-18 4t-16 9q0-4-7-4q7-7 26-11t29-5m135 45q41 0 75 14q-14 5-28 8t-29 4q-20 0-36-4q5-8 10-10t8-12M1024 0q141 0 271 37t244 103t208 161t160 207t104 244t37 272q0 141-37 271t-103 244t-161 208t-207 160t-244 104t-272 37q-141 0-271-37t-244-103t-208-161t-160-207t-104-244t-37-272q0-141 37-271t103-244t161-208t207-160T752 37t272-37m762 555q-14-22-28-42t-29-41q-2 9-5 13t-4 18q0 9 7 17t18 16t22 12t19 7m-69-98q0 8-3 11h6q4 0 6 1zm-693 1463q114 0 223-29t206-82t180-130t145-172q-13-30-25-61t-12-64q0-36 3-58t7-39t4-29t-3-31t-17-41t-37-62q1-7 3-19t4-25t1-24t-5-19q-26-3-54-11t-50-24l6-5q-13 3-26 8t-25 11t-26 8t-27 4l-16-2l3-7q-14 4-30 10t-31 6q-10 0-29-7t-38-17t-34-22t-15-23l2-3q-5-6-13-11t-15-10t-13-11t-5-14l11-9l-23-3l-8-30q2 5 9 4t11-4l-36-19l25-64q-14-52-7-80t27-46t44-36t49-49l-3-12l66-80l15-2q28 0 63-2t71-7t71-10t64-13q-32-38-67-72t-75-65q-11 4-27 11t-32 18t-25 24t-11 27l6 19q-18 29-40 36t-45 8t-48 0t-48 9l-16-34l15-58l-17-25l173-54q-11-28-36-42t-55-14v-10l56-9q-93-46-193-70t-205-24q-87 0-172 17t-164 49t-153 80t-135 108q26 0 40 13t26 29t25 29t35 14l16-12l-2-22l33-47l-26-74q5-3 15-10t17-7q30 0 46 3t28 11t21 23t28 38l36-28q10 4 32 13t45 22t39 27t17 26q0 15-11 24t-29 15t-37 9t-38 8t-29 10t-12 17l58 19q-20 17-43 31t-48 26l4 17l-92 36v28l-7 3l5-35l-4-1q-7 0-8 3t-1 7t2 8t1 6l-13-7l2 4q0 3 3 9t8 11t8 10t4 5q0 3-4 6t-10 4t-8 3t0 1q14 0 6 2t-25 10t-31 23t-16 44q0 17 1 33t-1 33q-14-38-42-58t-68-20l-43 4l21 14q-17-2-35-4t-37-1t-34 8t-30 21l-6 45q0 32 14 52t49 21q30 0 59-9t57-21q-9 22-20 42t-16 44l13 6q24-16 44-5t39 32t39 43t43 32l-34 18l-80-45q1 2 2 9t-1 3l-36-61q-32-1-68-10t-73-24t-69-33t-59-38l-7 107q0 122 33 238t93 218t147 186t193 143q-5-21-1-42t10-42t13-42t7-43q0-32-10-67t-24-71t-31-71t-27-66t-16-58t6-47l-15-7q6-14 16-27t21-26t17-28t7-30q0-10-4-21t-7-21l21 5q17-39 46-53t73-15q5 0 21 4t34 11t34 11t24 8q0 7 8 9t9 7l-2 8q3 1 14 7t24 15t23 16t14 11q18 0 49 12t68 30t73 43t68 50t49 50t20 44l-34 36q4 51-7 78t-34 45t-53 30t-65 34q0 20-10 43t-25 44t-36 35t-42 14l-42-32q2 2 0 7t-5 2q10 19 5 44t-17 51t-27 49t-27 39q54 14 108 21t109 7"/></svg>,
      description:
        "With bidders in 120+ countries and worldwide shipping, great art knows no boundaries.",
    },
  ];
   const stats = [
    { label: "Active Collectors", value: "50,000+" },
    { label: "Artworks Sold", value: "12,000+" },
    { label: "Total Sales", value: "$200M+" },
    { label: "Countries Reached", value: "120+" },
  ];


  return (
    <>
      <Nav />
      <div
        className="h-140 bg-cover bg-center"
        style={{ backgroundImage: `url(${abouthead})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <h3 className="mt-52 text-xl font-light text-white text-shadow-lg/30">
            Where Art Meets Opportunity
          </h3>
          <h2 className="text-white text-shadow-lg/30 text-center">
            Connecting collectors, artists, and galleries in a curated
            marketplace where <br />
            every piece tells a story worth discovering.
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5">
          <div className="relative">
            <img
              src={story}
              alt="Eastern Europe travel map"
              className="w-[500px] h-[75vh] object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-6">
            <button className="px-2 py-0.5 rounded-full bg-pink-100 shadow-sm hover:shadow-md transition">
              <span className="text-sm font-semibold text-pink-500 tracking-wide ">
                Our Story
              </span>
            </button>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-200 leading-snug">
              Redefining the Art Market
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Founded in 2020 by a collective of art enthusiasts and
              technologists, we saw an opportunity to democratize the world of
              fine art auctions. What began as a passion project has evolved
              into a global platform connecting thousands of collectors with
              exceptional works.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              We believe that art should be accessible, transparent, and
              celebrated. Our platform combines cutting-edge technology with
              deep expertise in curation, ensuring every auction is an
              experience worth remembering.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              From emerging artists to established masters, from contemporary
              pieces to timeless classics, we've facilitated over $200 million
              in transactions, making dreams come true for both collectors and
              creators.
            </p>
          </div>
        </section> 

    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
         <button className="px-2 py-0.5 rounded-full bg-pink-100 shadow-sm hover:shadow-md transition">
              <span className="font-semibold text-pink-500 tracking-wide ">
                What We Stand For
              </span>
            </button>
        <h3 className="text-sm mt-4 font-semibold">Our Core Values</h3>
        <p className="mt-4 dark:text-gray-200 text-gray-600 ">
          These principles guide every decision we make and every auction we host.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-neutral-50 p-6 rounded-lg shadow-sm border-l-4 border-pink-600 hover:-translate-y-2 transition transform duration-300"
          >
            <div className="text-3xl">{value.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
     
      </div>
       <div
        className="relative mt-12 h-[90vh] md:h-[45vh]  flex items-center justify-center w-full bg-cover bg-center text-white py-16 px-6 "
        style={{ backgroundImage: `url(${foot})` }}
      >
 <section className="absloute text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 mt-3">Our Impact in Numbers</h2>
        <p className="text-sm mb-10">Building a legacy, one auction at a time.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className=" rounded-lg p-6 shadow-md backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-yellow-500 hover:-translate-y-2 transition transform duration-300">{item.value}</div>
              <div className="text-sm font-light mt-2">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>


      </div>
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 max-w-6xl mx-auto">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold dark:text-gray-200 text-gray-800">Start Your Collection Today</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          Join our community of passionate collectors and discover your next masterpiece. Whether you're a seasoned art investor or just beginning your journey, we're here to guide you every step of the way.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button onClick={() => navigate("/auction")}  className="cursor-pointer bg-black hover:bg-gray-900 text-white font-semibold px-5 py-2 rounded-md transition">
            Browse Auctions →
          </button>
          <button onClick={() => navigate("/contact")}  className="cursor-pointer bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium px-5 py-2 rounded-md transition">
            Contact Us
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
          <img
              src={end}
              alt="Eastern Europe travel map"
              className="w-[500px] h-[55vh] object-cover rounded-lg"
            />
        
      </div>
    </section>
    <Footer />
    </>
  );
}
