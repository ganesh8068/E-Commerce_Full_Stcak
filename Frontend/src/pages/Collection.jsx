import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Tittle from "../components/Tittle";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products , search, showSearch} = useContext(ShopContext);

  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]); // e.g. Men, Women, Kids
  const [selectedTypes, setSelectedTypes] = useState([]); // e.g. Topwear, Bottomwear, Winterwear
  const [sortBy, setSortBy] = useState("latest");

  // Handle checkbox changes for filters
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  // Filter and sort products whenever dependencies change
  useEffect(() => {
  let filtered = [...products];

  // Filter by category
  if (selectedCategories.length > 0) {
    filtered = filtered.filter((p) => selectedCategories.includes(p.category));
  }

  // Filter by subCategory (type)
  if (selectedTypes.length > 0) {
    filtered = filtered.filter((p) => selectedTypes.includes(p.subCategory));
  }

  // Filter by search keyword
  if (search.trim() !== "") {
    const lowerSearch = search.toLowerCase();
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(lowerSearch)
    );
  }

  // Sorting logic
  if (sortBy === "latest") {
    filtered.sort((a, b) => b.date - a.date);
  } else if (sortBy === "popular") {
    filtered.sort((a, b) =>
      b.bestseller === a.bestseller ? 0 : b.bestseller ? 1 : -1
    );
  } else if (sortBy === "relevant" || sortBy === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  setFilteredProducts(filtered);
}, [products, selectedCategories, selectedTypes, sortBy, search]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar Filters */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 hidden ${showFilters ? "rotate-90" : ""}`}
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  className="w-3"
                  checked={selectedCategories.includes(cat)}
                  onChange={handleCategoryChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex gap-2">
                <input
                  type="checkbox"
                  value={type}
                  className="w-3"
                  checked={selectedTypes.includes(type)}
                  onChange={handleTypeChange}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Product Grid */}
      <div className="flex-1">
        {/* Header and Sort Dropdown */}
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Tittle text1={"ALL"} text2={"COLLECTION"} />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="latest">Sort by: Latest</option>
            <option value="popular">Sort by: Popular</option>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
