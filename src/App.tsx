import React, { FC, useState } from "react";

import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";

const App: FC = () => {
  const [lightTheme, setLightTheme] = useState(false);
  // {`${lightTheme ? "light" : ""} border-box overflow-hidden`}
  return (
    <div className="box-border overflow-hidden">
      <Sidebar />
      <div className="w-screen ml-20 flex flex-col">
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
