"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/commonComponents/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";

import logo25 from "../../../public/images/logo25.png";
import logo26 from "../../../public/images/logo26.png";
import logo27 from "../../../public/images/logo27.png";
import logo28 from "../../../public/images/logo28.png";

const relatedProducts = [
  { name: "Chibi Warrior", price: "$16.00", rating: 5, image: logo26 },
  { name: "Black Armor", price: "$14.00", rating: 5, image: logo27 },
];

const hotSelling = [
  { name: "Viking Toy", price: "$16.00", rating: 5, image: logo28 },
  { name: "Medieval Knight", price: "$12.00", rating: 5, image: logo25 },
];

const Page = () => {
  const searchParams = useSearchParams();

  // Product data from query
  const name = searchParams.get("name") || "Armored Knight";
  const price = searchParams.get("price") || "$12.08";
  const rating = Number(searchParams.get("rating")) || 5;
  const image = searchParams.get("image") || logo25.src;

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex flex-1 px-6 py-10 gap-8 overflow-y-auto">
          {/* Left: Product Section */}
          <div className="flex-1 flex flex-col md:flex-row gap-8">
            {/* Product Image & Thumbnails */}
            <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg w-full md:w-1/2 border border-gray-700">
              <div className="relative w-full flex justify-center">
                <img
                  src={image}
                  alt={name}
                  className="w-64 h-64 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl transition">
                  <FaHeart />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-6">
                {[logo25, logo26, logo27, logo28].map((thumb, idx) => (
                  <button
                    key={idx}
                    className="bg-gray-800 p-2 rounded-lg border border-gray-700 hover:border-blue-500 transition"
                  >
                    <Image src={thumb} alt="thumb" width={50} height={50} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex-1 flex flex-col justify-between border border-gray-700">
              <div>
                <h1 className="text-3xl font-bold mb-2">{name}</h1>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  Armed with a heavy battle mace and blessed shield plating, this elite unit is perfect for frontline battles.
                </p>

                {/* Price + Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-400 text-2xl font-bold">{price}</span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="text-gray-400 text-sm space-y-1 mb-6">
                  <p>
                    Category: <span className="text-white font-medium">Warrior Class</span>
                  </p>
                  <p>
                    Rarity: <span className="text-white font-medium">Epic</span>
                  </p>
                  <p>
                    XP Boost: <span className="text-blue-400 font-medium">+20%</span>
                  </p>
                </div>

                {/* Quantity Selector + Buy Button */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                    <button className="px-2 text-gray-300 hover:text-white">-</button>
                    <span className="px-4 font-medium">01</span>
                    <button className="px-2 text-gray-300 hover:text-white">+</button>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg flex items-center gap-2 font-medium transition">
                    <FaShoppingCart /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Related & Hot Selling */}
          <aside className="hidden xl:flex flex-col w-80 gap-6">
            {/* Related Products */}
            <ProductList title="Related Products" products={relatedProducts} />

            {/* Hot Selling */}
            <ProductList title="Hot Selling" products={hotSelling} />
          </aside>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------
   Reusable Product List Card
--------------------------- */
const ProductList = ({ title, products }) => (
  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold">{title}</h2>
      <button className="text-blue-400 text-sm hover:underline">View all</button>
    </div>
    {products.map((p, idx) => (
      <div
        key={idx}
        className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mb-3 hover:bg-gray-750 transition"
      >
        <Image src={p.image} alt={p.name} width={50} height={50} />
        <div className="flex-1 mx-3">
          <p className="text-sm font-medium">{p.name}</p>
          <p className="text-yellow-400 text-xs">{"⭐".repeat(p.rating)}</p>
        </div>
        <span className="text-blue-400 text-sm font-medium">{p.price}</span>
      </div>
    ))}
  </div>
);

export default Page;
