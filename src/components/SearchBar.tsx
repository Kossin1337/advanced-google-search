import React, { useState } from "react";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full px-5 h-20 flex justify-between items-center bg-neutral-50 border-b-2 border-neutral-200">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="min-w-[300px] p-2 bg-gray-900 rounded-2xl text-white focus:none"
      />
      <h1>yoyoyo</h1>
    </div>
  );
};
