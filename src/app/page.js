"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import VehicleCard from "@/components/VehicleCard";
import vehicles from "@/data/vehicles";
import Footer from "@/components/Footer";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [priceSort, setPriceSort] = useState("");

  // Filter + Sort (REAL, but still demo-safe)
  const filteredVehicles = useMemo(() => {
    let list = [...vehicles];

    // Category filter
    if (category !== "All") {
      list = list.filter((v) => v.type === category);
    }

    // Price sort
    if (priceSort === "low") {
      list.sort(
        (a, b) =>
          parseInt(a.price.replace(/\D/g, "")) -
          parseInt(b.price.replace(/\D/g, ""))
      );
    }

    if (priceSort === "high") {
      list.sort(
        (a, b) =>
          parseInt(b.price.replace(/\D/g, "")) -
          parseInt(a.price.replace(/\D/g, ""))
      );
    }

    return list;
  }, [category, priceSort]);

  return (
    <>
      <Navbar />
      <Hero />

      <section className="py-16 px-8 bg-gray-50">
          {/* Search Bar */}
       <div className="mb-12">
       <SearchBar />
       </div>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
          Available Vehicles
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Choose from our wide range of bikes, scooties and cars
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {["All", "Bike", "Scooty", "Car"].map((type) => (
            <button
              key={type}
              onClick={() => setCategory(type)}
              className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 ${
                category === type
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Price Filter */}
        <div className="flex justify-center mb-12">
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="border px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sort by price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredVehicles.map((v, i) => (
            <div
              key={i}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <VehicleCard {...v} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
