import Nav from "../components/nav";
import paint1 from "../assets/paint1.jpg";
import paint2 from "../assets/paint2.jpg";
import paint3 from "../assets/paint3.jpg";
import paint4 from "../assets/paint4.jpg";
import paint5 from "../assets/paint5.jpg";
import paint6 from "../assets/paint6.jpg";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
export default function auction() {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const updated = {};
        for (let id in prev) {
          updated[id] = prev[id] > 0 ? prev[id] - 1 : 0;
        }
        return updated;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };
  //   const parseTimeString = (timeStr) => {
  //   const [h, m, s] = timeStr.split(' ').map((part) => parseInt(part));
  //   return h * 3600 + m * 60 + s;
  // };

  const artworks = [
    {
      id: 1,
      title: "Thresholds of Thought",
      artist: "Melanie ",
      year: 2023,
      description:
        "A mesmerizing abstract composition exploring the boundaries of consciousness",
      category: "Abstract",
      bid: 0,
      bids: 0,
      time: 10191,
      image: paint1,
    },
    {
      id: 2,
      title: "Urban Syntax",
      artist: "David Kim",
      year: 2023,
      description:
        "Contemporary exploration of city life through bold geometric forms",
      category: "Modern",
      bid: 0,
      bids: 0,
      time: 17391,
      image: paint2,
    },
    {
      id: 3,
      title: "Alpine Reverie",
      artist: "Thomas Chen",
      year: 2022,
      description:
        "Oil on canvas depicting the majestic tranquility of alpine peaks",
      category: "Landscape",
      bid: 0,
      bids: 0,
      time: 28191,
      image: paint3,
    },
    {
      id: 4,
      title: "Silent Storm",
      artist: "Sofia Rossi",
      year: 2024,
      description: "A powerful portrait capturing the depth of human emotion",
      category: "Portrait",
      bid: 4200,
      bids: 22,
      time: 42591,
      image: paint4,
    },
    {
      id: 5,
      title: "Ode to the Abyss",
      artist: "Alexandre Dubois",
      year: 2021,
      description:
        "Classical technique meets timeless subject matter in this masterwork",
      category: "Classical",

      bid: 3100,
      bids: 18,
      time: 64190,
      image: paint5,
    },
    {
      id: 6,
      title: "Spectrum Unbound",
      artist: "Elena Petrova",
      year: 2024,
      description:
        "A vibrant celebration of color and movement in abstract form",
      category: "Abstract",

      bid: 2850,
      bids: 14,
      time: 85791,
      image: paint6,
    },
  ];
  const [timeLeft, setTimeLeft] = useState(() => {
    const initial = {};
    artworks.forEach((art) => {
      initial[art.id] = art.time;
    });
    return initial;
  });
  const [bidAmount, setBidAmount] = useState(() => {
    const initial = {};
    artworks.forEach((art) => {
      initial[art.id] = art.bid;
    });
    return initial;
  });

  const increaseBid = (id) => {
    setBidAmount((prev) => ({
      ...prev,
      [id]: prev[id] + 100,
    }));
  };

  const decreaseBid = (id) => {
    setBidAmount((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 100, 0),
    }));
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Ending Soon");

  const categories = [
    "All",
    "Abstract",
    "Landscape",
    "Portrait",
    "Modern",
    "Classical",
  ];
  const sortOptions = [
    "Ending Soon",
    "Price: Low to High",
    "Price: High to Low",
  ];

  let filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  if (sortOption === "Price: Low to High") {
    filteredArtworks = filteredArtworks.sort((a, b) => a.bid - b.bid);
  } else if (sortOption === "Price: High to Low") {
    filteredArtworks = filteredArtworks.sort((a, b) => b.bid - a.bid);
  } else if (sortOption === "Ending Soon") {
    filteredArtworks = filteredArtworks.sort((a, b) => a.time - b.time);
  }
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 mb-7">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg shadow-md mb-5">
          <div className="flex flex-wrap gap-2 items-center">
            <svg
              className="text-black dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 3h16a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707v6.305a1 1 0 0 1-1.243.97l-2-.5a1 1 0 0 1-.757-.97v-5.805a1 1 0 0 0-.293-.707L3.293 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1"
              />
            </svg>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300 text-sm bg-white text-gray-800"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-98 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-black">{art.title}</h3>
                  <button className="px-2 py-0.5 rounded-full bg-purple-100 shadow-sm hover:shadow-md transition">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-medium text-xs">
                      {art.category}
                    </span>
                  </button>
                </div>
                <p className="text-sm text-gray-600">{art.artist}</p>
                <p className="text-sm text-gray-600">{art.year}</p>
                <p className="text-sm text-gray-700">{art.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="text-sm text-gray-800">
                    Current Bid: ${bidAmount[art.id].toLocaleString()}
                  </p>
                  <p>{art.bids} bids</p>

                  <p className="text-sm text-pink-600 font-medium">
                    Time Remaining: {formatTime(timeLeft[art.id])}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={() => decreaseBid(art.id)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
                  >
                    −
                  </button>
                  <button
                    onClick={() => increaseBid(art.id)}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded"
                  >
                    ＋
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
