import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Crew from "./Component/Crew/Crew";
import Destination from "./Component/Destination/Destination";
import Technology from "./Component/Technology/Technology";
import "./Bellefair/Bellefair-Regular.ttf";
import { AnimatePresence } from "framer-motion";
export const crewContext = React.createContext();
export const technologyContext = React.createContext();
export const destinationContext = React.createContext();

function App() {
  const [data, setData] = useState(null);
  const [technology, setTechnology] = useState(null);
  const [crew, setCrew] = useState(null);
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const fetchData = async () => {
    try {
      const response = await fetch("../../../data.json"); // Adjust the path to your data.json file.
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
      setCrew(jsonData.crew);
      setDestination(jsonData.destinations);
      setTechnology(jsonData.technology);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [setData]);
  // console.log(data)
  // console.log(crew)
  // console.log(destination)
  // console.log(technology)

  return (
    <>
      <crewContext.Provider value={crew}>
        <technologyContext.Provider value={technology}>
          <destinationContext.Provider value={destination}>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />

                <Route
                  path="/destination"
                  element={<Destination loading={loading} />}
                />
                <Route path="/crew" element={<Crew loading={loading} />} />
                <Route
                  path="/technology"
                  element={<Technology loading={loading} />}
                />
              </Routes>
            </AnimatePresence>
          </destinationContext.Provider>
        </technologyContext.Provider>
      </crewContext.Provider>
    </>
  );
}

export default App;
