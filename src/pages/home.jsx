import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";
import homepic from "../assets/homepic.jpg";
import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
export default function Home({ currentBid }) {
  const [timeLeft, setTimeLeft] = useState(1286);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const item = {
    title: "Dance of the Flame",
    artist: "Belicia",
    bid: 0,
    bidsCount: 0,
    status: "LIVE",
    image: card1,
  };
  const item2 = {
    title: "Veil of Fire",
    artist: "Raz Edv",
    bid: 6700,
    bidsCount: 12,
    status: "LIVE",
    image: card2,
  };
  const item3 = {
    title: "Threaded Minds",
    artist: "Razor Picz",
    bid: 0,
    bidsCount:0,
    image: card3,
  };
  const item4 = {
    title: "The Inner Rift",
    artist: "nu1",
    bid: 0,
    bidsCount:0,
    status: "LIVE",
    image: card4,
  };

  const isLive = item.status === "LIVE";
  const [bidAmount, setBidAmount] = useState(Number(currentBid) || item.bid);

  const increaseBid = () => setBidAmount((prev) => prev + 100);
  const decreaseBid = () => setBidAmount((prev) => Math.max(prev - 100, 0));

  const isLi = item2.status === "LIVE";
  const [bidAm, setBidAm] = useState(Number(currentBid) || item2.bid);

  const isL = item3.status === "LIVE";
  const [bidA, setBidA] = useState(Number(currentBid) || item3.bid);
  const increase = () => setBidA((prev) => prev + 100);
  const decrease = () => setBidA((prev) => Math.max(prev - 100, 0));

  const is = item4.status === "LIVE";
  const [bid, setBid] = useState(Number(currentBid) || item4.bid);
  const incr = () => setBid((prev) => prev + 100);
  const decr = () => setBid((prev) => Math.max(prev - 100, 0));

  const isEnded = true;

  const navigate = useNavigate();
  const destinations = [
    {
      name: "Contemporary",
      art: 245,
      image: art1,
    },
    {
      name: "Classical",
      art: 189,
      image: art2,
    },
    {
      name: "Sculpture",
      art: 127,
      image: art3,
    },
    {
      name: "Photography",
      art: 312,
      image: art4,
    },
  ];
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center py-2">
        <div>
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">New Auction Season 2025</h1>
            <h2 className="text-2xl font-bold">Discover & Collect</h2>
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              Extraordinary Art
            </h2>
            <p className="text-sm dark:text-gray-300 text-gray-600 mb-6">
              Join the world’s premier online art auction platform. Bid on
              masterpieces from emerging and established artists, all from the
              comfort of your home.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/auction")}
                className="cursor-pointer bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-200 transition"
              >
                Explore Auctions
              </button>
              <button
                onClick={() => navigate("/about")}
                className="cursor-pointer border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold">$12.4M</div>
              <div className="text-sm dark:text-gray-300 text-gray-600">Total Sales</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold">15,234</div>
              <div className="text-sm dark:text-gray-300 text-gray-60">Active Bidders</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold">487</div>
              <div className="text-sm dark:text-gray-300 text-gray-60">Live Auctions</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold">2,156</div>
              <div className="text-sm dark:text-gray-300 text-gray-60">Artists</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-start min-h-screen p-3">
          <div className="relative w-[500px] md:h-[83vh] h-[75vh] rounded-xl overflow-hidden shadow-lg">
            <img
              src={homepic}
              alt="Chromatic Dreams"
              className="absolute inset-0 object-cover opacity-90 dark:opacity-50"
            />
            <div className="absolute top-4 right-0 flex items-center bg-white text-black px-4 py-2 rounded-xl shadow-lg">
              <div className="bg-black rounded-full p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 128 128"
                >
                  <defs>
                    <path
                      id="SVG78HFwS2F"
                      d="M103.44 27.85c-2.15-5.08-6.79-11.67-11.58-14.6C80.72 6.4 66.56 5.08 53.93 7.5C34.09 11.3 15.5 24.13 6.19 42.21c-6.59 12.8-7.95 32.31.83 44.59c5.73 8.01 17.1 11.04 26.12 7.28c6.13-2.55 9.93-8.23 15.23-11.95c6.88-4.84 14.34-3.47 22.32-3.78c22.91-.87 41.64-29.39 32.75-50.5M69.75 60.89c-1.82.7-4.21 1.11-6.17.82c-1.98-.31-4.08-1.76-5.13-3.48c-3.65-5.92 2.41-12.77 8.01-14.26c2.78-.74 6.86-.28 9.07 1.63c5.73 4.95-.52 13.25-5.78 15.29"
                    />
                  </defs>
                  <use fill="#f79329" href="#SVG78HFwS2F" />
                  <path
                    fill="#ed6c30"
                    d="M43.47 21.59c1.57-1.26 3.59-2.05 5.48-2.21c3.45-.3 5.89 2.77 5.75 6.17c-.19 4.3-4.91 6.39-8.85 6.22c-3.06-.13-5.58-2.89-5.07-5.87c.31-1.74 1.33-3.2 2.69-4.31"
                  />
                  <path
                    fill="#bdcf46"
                    d="M16.49 53.68c1.19-4.79 6.88-7.82 10.93-4.4c3.86 3.25 2.05 9.69-2.04 12.05c-2.72 1.57-6.76.52-8.33-2.39c-.87-1.61-1-3.5-.56-5.26"
                  />
                  <path
                    fill="#006ca2"
                    d="M28.73 70.02c2.27 4.3.76 10.93-4.77 11.39s-8.62-6.05-7.19-10.81c1.43-4.74 7.29-5.52 10.59-2.4c.56.53 1.02 1.14 1.37 1.82"
                  />
                  <path
                    fill="#fcc21b"
                    d="M38.28 39.46c-1.49 2.74-4.96 5.13-8.17 4.73c-4.03-.5-5.61-5.3-3.86-8.73c2.4-4.7 9.92-6.58 12.44-.8c.69 1.59.42 3.29-.41 4.8"
                  />
                  <defs>
                    <path
                      id="SVGAV8ZddEK"
                      d="M73.56 88.64c-5.05-.2-10.42 2.1-13.7 6.37c-3.4 4.42-3.3 10.08-3.44 15.38c-.08 2.88.4 6.9-1.69 9.24c-.94 1.05-1.93 1.27-3.21 1.43c-.5.06-2.94-.32-2.02 1.08c1.75 2.67 8.26 3.35 11.05 3.47c7.5.34 14.88-2.98 19.83-8.59c.51-.59 1-1.2 1.46-1.83c3.69-5.08 5.85-12.28 3.48-18.33c-2.14-5.45-6.8-8.03-11.76-8.22"
                    />
                  </defs>
                  <use fill="#fff" href="#SVGAV8ZddEK" />
                  <clipPath id="SVGZGNjmdjx">
                    <use href="#SVGAV8ZddEK" />
                  </clipPath>
                  <path
                    fill="#ed6c30"
                    d="M65.05 103.63c.11.24.21.55.26.94c.31 2.38 2.13 2.9 4.29 2.9c2.19 0 4.92-.48 4.92 2.46c-.01 1.26-.61 2.19.65 2.96c1.9 1.16 5.54.89 7.38-.32c1.14-.75 2.74-1.42 2.02.71c-.42 1.23-1.24 2.36-1.84 3.52c-.66 1.27-1.49 2.28-2.49 3.3c-.73.75-1.23 1.65-2.07 2.29c-2.15 1.63-4.95 2.14-7.46 2.96c-3.36 1.1-6.57 3.06-10.17 2.05c-3.81-1.07-7.96-.64-11.71-1.87c-1.85-.61-3-1.73-2.72-3.72c.25-1.71 1.42-2.35 2.98-2.69c1.76-.39 3.2-.86 4.01-2.62c.7-1.49.22-3.66.12-5.24c-.14-2.15-.38-4.42.17-6.53c.46-1.74.97-3.48 1.73-5.12c.35-.77.72-1.71 1.28-2.35c.87-1 1.94-1.45 3.12-1.98c.37.95-.42 2.46-.56 3.42c-.23 1.65-.18 3.42 1.5 4.09c1.63.62 3.8-.82 4.59.84"
                    clip-path="url(#SVGZGNjmdjx)"
                  />
                  <path
                    fill="#855c52"
                    d="M91.93 60.63c5.67-6.52 9.85-14.31 14.96-21.29c3.14-4.28 6.03-8.8 8.95-13.21c1.85-2.79 4.51-7.68 8.43-7.61c.68.01 1.3.3 1.85.69c1.21.86 1.2 2.93.8 4.21c-1.59 5.15-4.57 10.08-7.07 14.84c-.95 1.82-1.92 3.64-2.93 5.43c-2.95 5.25-6.03 10.43-8.75 15.81c-1.06 2.1-2.06 4.22-2.97 6.38c-.57 1.34-1.45 2.48-1.8 3.88c-.36 1.44-3.61-2.61-3.81-2.93c-.74-1.23-1.42-1.88-2.74-2.32c-.95-.31-6.04-1.04-5.63-2.66c.11-.42.37-.83.71-1.22"
                  />
                  <defs>
                    <path
                      id="SVGshMCKdlF"
                      d="M102.54 68.36c-.96-2.01-2.82-3.14-4.45-4.14c-.42-.26-.84-.51-1.22-.77c-2.58-1.77-4.79-2.2-6.57-1.35c-2.67 1.28-4.56 4.66-6.09 7.38c-.42.74-.8 1.42-1.15 1.98c-2.87 4.47-5.64 7.9-10.54 11.2l-.42.27c-1.11.71-2.63 1.69-2.75 3.46c-.05.75.16 1.88 1.47 2.99c1.43 1.21 3 1.95 4.52 2.66c.54.25 1.09.51 1.62.79c1.75.92 3.34 2.13 5.03 3.42l1 .75c.26.19.52.45.8.7c.78.73 1.75 1.65 3.01 2c.43.12.81.18 1.15.18c1.36 0 2.04-.84 2.41-1.29l.15-.18c1.46-1.71 2.18-4 2.81-6.02c.3-.98.59-1.91.93-2.69c.54-1.23 1.05-2.47 1.56-3.71c1.12-2.74 2.18-5.33 3.55-7.8c.32-.59.79-1.2 1.29-1.84c1.47-1.94 3.5-4.6 1.89-7.99"
                    />
                  </defs>
                  <use fill="#78a3ad" href="#SVGshMCKdlF" />
                  <clipPath id="SVGwryO8Wmk">
                    <use href="#SVGshMCKdlF" />
                  </clipPath>
                  <path
                    fill="#2f2f2f"
                    d="M93.71 98.86c-.72 0-1.42-.35-1.87-.99c-.53-.79-.85-1.57-1.14-2.26c-.26-.63-.48-1.17-.81-1.6c-3.07-3.96-6.79-6.7-12.85-9.47c-1.81-.83-3.46-1.24-4.86-1.24c-1.25 0-2.26-1.01-2.26-2.25s1.01-2.25 2.26-2.25c2.05 0 4.32.56 6.73 1.65c4.71 2.15 10.13 5.12 14.54 10.81c.71.91 1.09 1.83 1.42 2.65c.23.56.43 1.04.71 1.45c.7 1.03.42 2.43-.6 3.12c-.4.25-.84.38-1.27.38"
                    clip-path="url(#SVGwryO8Wmk)"
                  />
                </svg>
              </div>
              <div className="text-sm font-semibold leading-tight">
                <div>487</div>
                <div className="text-xs">Active Auctions</div>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-5 text-white z-10">
              <div>
                <div className="inline-flex items-center bg-red-600 text-white px-1.5 py-0.5 rounded-full font-semibold text-sm shadow-md">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  LIVE NOW
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Silent Bloom</h2>
                <p className="text-sm text-gray-200 mb-2">Kaitlin Lunt</p>
                <div className="text-sm text-gray-300">Current Bid</div>
                <div className="text-sm text-white ">$12,500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center px-4">
        <div className="w-full ">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Explore by Category
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Find artworks that match your taste.
            </p>
          </div>
          <section className="px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-12">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
                  <img
                    src={dest.image}
                    className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 px-4 py-3 text-white">
                    <h3 className="text-base">{dest.name}</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {dest.art} artworks
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center px-4 py-10 gap-6">
        <div className="flex-col items-center gap-4">
          <div className="inline-flex items-center bg-red-600 text-white px-2 py-1 rounded-full font-semibold text-sm shadow-md">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            LIVE NOW
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 mt-3">
              Live Auctions
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Place your bids on these ongoing auctions
            </p>
          </div>
        </div>
        <button  onClick={() => navigate("/auction")} className="cursor-pointer flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-4 grid-cols-2 items-center gap-5">
        <div className="flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:h-[52vh] h-[47vh] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-sm font-bold rounded ${
                  isLive ? "bg-red-600" : "bg-gray-600"
                } text-white`}
              >
                {isLive ? "LIVE" : "Ended"}
              </span>
            </div>

            <div className="p-6 space-y-2 md:h-[36vh] h-[44vh]">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-base text-gray-500">by {item.artist}</p>
              <p className="text-sm text-gray-800">
                Current Bid: ${bidAmount.toLocaleString()}
              </p>
              <p className="text-base text-gray-700">
                <span className="font-medium">Bids:</span> {item.bidsCount}
              </p>
              {isLive ? (
                <div className="flex items-center gap-2">
                  <svg
                  className="text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 30 30"
                  >
                    <path
                      fill="currentColor"
                      d="M3.74 14.47c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11s3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4s1.81 2.2 2.4 3.6s.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59s-2.2 1.8-3.59 2.39s-2.84.89-4.37.89s-3-.3-4.39-.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58s-.88-2.84-.88-4.37m2.48 0c0 2.37.86 4.43 2.59 6.18c1.73 1.73 3.79 2.59 6.2 2.59c1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2s1.19-2.81 1.19-4.39s-.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05.39-4.39 1.18S8.2 8.72 7.4 10.07s-1.18 2.82-1.18 4.4m7.92 0V7.81c0-.23.08-.43.24-.59s.36-.24.59-.24s.43.08.59.24s.24.36.24.59v6.15l3.59 2.09c.2.12.32.29.38.51s.03.43-.09.62q-.24.42-.72.42q-.255 0-.42-.12l-3.82-2.23c-.17-.05-.31-.15-.42-.29s-.16-.3-.16-.49"
                    />
                  </svg>
                <p className="text-sm text-pink-600 font-medium">
                  Time Remaining: {formatTime(timeLeft)}
                </p>
                </div>
              ) : (
                <p className="text-base text-red-500 font-medium">
                  Auction Ended
                </p>
              )}
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={decreaseBid}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                >
                  −
                </button>
                <button
                  onClick={increaseBid}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded"
                >
                  ＋
                </button>
              </div>
            </div>
          </div>
        </div>


  <div className="flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
            <div className="relative group">
              <img
                src={item3.image}
                alt={item3.title}
                className="w-full md:h-[52vh] h-[47vh] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-sm font-bold rounded ${
                  isL ? "bg-red-600" : "bg-gray-600"
                } text-white`}
              >
                {isL ? "LIVE" : "Ended"}
              </span>
            </div>

            <div className="p-6 space-y-2 md:h-[36vh] h-[44vh]">
              <h3 className="text-lg font-semibold text-gray-800">
                {item3.title}
              </h3>
              <p className="text-base text-gray-500">by {item3.artist}</p>
              <p className="text-sm text-gray-800">
                Current Bid: ${bidA.toLocaleString()}
              </p>
              <p className="text-base text-gray-700">
                <span className="font-medium">Bids:</span> {item3.bidsCount}
              </p>
              {isLive ? (
                <div className="flex items-center gap-2">
                  <svg
                  className="text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 30 30"
                  >
                    <path
                      fill="currentColor"
                      d="M3.74 14.47c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11s3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4s1.81 2.2 2.4 3.6s.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59s-2.2 1.8-3.59 2.39s-2.84.89-4.37.89s-3-.3-4.39-.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58s-.88-2.84-.88-4.37m2.48 0c0 2.37.86 4.43 2.59 6.18c1.73 1.73 3.79 2.59 6.2 2.59c1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2s1.19-2.81 1.19-4.39s-.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05.39-4.39 1.18S8.2 8.72 7.4 10.07s-1.18 2.82-1.18 4.4m7.92 0V7.81c0-.23.08-.43.24-.59s.36-.24.59-.24s.43.08.59.24s.24.36.24.59v6.15l3.59 2.09c.2.12.32.29.38.51s.03.43-.09.62q-.24.42-.72.42q-.255 0-.42-.12l-3.82-2.23c-.17-.05-.31-.15-.42-.29s-.16-.3-.16-.49"
                    />
                  </svg>
                <p className="text-sm text-pink-600 font-medium">
                  Time Remaining: {formatTime(timeLeft)}
                </p>
                </div>
              ) : (
                <p className="text-base text-red-500 font-medium">
                  Auction Ended
                </p>
              )}
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={decrease}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                >
                  −
                </button>
                <button
                  onClick={increase}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded"
                >
                  ＋
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
            <div className="relative group">
              <img
                src={item2.image}
                alt={item2.title}
                className="w-full md:h-[52vh] h-[47vh] object-cover transition-transform duration-300 group-hover:scale-105"
              />
             
            </div>

            <div className="p-6 space-y-2 md:h-[36vh] h-[44vh]">
              <h3 className="text-lg font-semibold text-gray-800">
                {item2.title}
              </h3>
              <p className="text-base text-gray-500">by {item2.artist}</p>
              <p className="text-sm text-gray-800">
                Current Bid: ${bidAm.toLocaleString()}
              </p>
              <p className="text-base text-gray-700">
                <span className="font-medium">Bids:</span> {item2.bidsCount}
              </p>

              <div className="text-xs font-medium text-pink-600 mt-15 md:mt-0">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 30 30"
                  >
                    <path
                      fill="currentColor"
                      d="M3.74 14.47c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11s3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4s1.81 2.2 2.4 3.6s.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59s-2.2 1.8-3.59 2.39s-2.84.89-4.37.89s-3-.3-4.39-.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58s-.88-2.84-.88-4.37m2.48 0c0 2.37.86 4.43 2.59 6.18c1.73 1.73 3.79 2.59 6.2 2.59c1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2s1.19-2.81 1.19-4.39s-.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05.39-4.39 1.18S8.2 8.72 7.4 10.07s-1.18 2.82-1.18 4.4m7.92 0V7.81c0-.23.08-.43.24-.59s.36-.24.59-.24s.43.08.59.24s.24.36.24.59v6.15l3.59 2.09c.2.12.32.29.38.51s.03.43-.09.62q-.24.42-.72.42q-.255 0-.42-.12l-3.82-2.23c-.17-.05-.31-.15-.42-.29s-.16-.3-.16-.49"
                    />
                  </svg>
                  Auction Ended
                </div>
                <button
                  disabled
                  className="mt-5 w-full bg-gray-300 text-gray-500 font-semibold py-2 px-4 rounded cursor-not-allowed"
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>

      

       <div className="flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
            <div className="relative group">
              <img
                src={item4.image}
                alt={item4.title}
                className="w-full md:h-[52vh] h-[47vh] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-sm font-bold rounded ${
                  is ? "bg-red-600" : "bg-gray-600"
                } text-white`}
              >
                {is ? "LIVE" : "Ended"}
              </span>
            </div>

            <div className="p-6 space-y-2 md:h-[36vh] h-[44vh]">
              <h3 className="text-lg font-semibold text-gray-800">
                {item4.title}
              </h3>
              <p className="text-base text-gray-500">by {item4.artist}</p>
              <p className="text-sm text-gray-800">
                Current Bid: ${bid.toLocaleString()}
              </p>
               
              <p className="text-base text-gray-700">
                <span className="font-medium">Bids:</span> {item.bidsCount}
              </p>
              {isLive ? (
                <div className="flex items-center gap-2">
                  <svg
                  className="text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 30 30"
                  >
                    <path
                      fill="currentColor"
                      d="M3.74 14.47c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11s3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4s1.81 2.2 2.4 3.6s.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59s-2.2 1.8-3.59 2.39s-2.84.89-4.37.89s-3-.3-4.39-.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58s-.88-2.84-.88-4.37m2.48 0c0 2.37.86 4.43 2.59 6.18c1.73 1.73 3.79 2.59 6.2 2.59c1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2s1.19-2.81 1.19-4.39s-.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05.39-4.39 1.18S8.2 8.72 7.4 10.07s-1.18 2.82-1.18 4.4m7.92 0V7.81c0-.23.08-.43.24-.59s.36-.24.59-.24s.43.08.59.24s.24.36.24.59v6.15l3.59 2.09c.2.12.32.29.38.51s.03.43-.09.62q-.24.42-.72.42q-.255 0-.42-.12l-3.82-2.23c-.17-.05-.31-.15-.42-.29s-.16-.3-.16-.49"
                    />
                  </svg>
                <p className="text-sm text-pink-600 font-medium ">
                  Time Remaining: {formatTime(timeLeft)}
                </p>
                </div>
              ) : (
                
                <p className="text-base text-red-500 font-medium">
                  Auction Ended
                </p>
              )}
              <div className="flex items-center gap-2 md:mt-4 mt-11">
                <button
                  onClick={decr}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                >
                  −
                </button>
                <button
                  onClick={incr}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded"
                >
                  ＋
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    <div className="bg-pink-500 text-white py-12 px-6 text-center rounded-lg shadow-lg mt-7">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Collection?</h2>
      <p className="text-lg mb-6">
        Join thousands of art collectors and enthusiasts. Create your free account today and get access<br/> to exclusive auctions.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button  onClick={() => navigate("/register")} className="bg-white text-pink-600 font-semibold py-2 px-5 rounded hover:bg-pink-100 transition">
          Create Account
        </button>
        <button  onClick={() => navigate("/auction")} className="border border-white text-white font-semibold py-2 px-5 rounded hover:bg-white hover:text-pink-600 transition">
          Browse Artworks
        </button>
      </div>
    </div>
<Footer />
    </>
  );
}
