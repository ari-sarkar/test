import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import ImageCard from "./Components/ImageCard/ImageCard";
import Search from "./Components/Search/Search";
import Data from "./Data.json";

function App() {
  useEffect(() => {
    document.getElementById("loader").style.display = "none";
  }, []);

  return (
    <BrowserRouter>
      <div id="Container">
        <header>
          <Search />
          <nav className="item_container">
            {Data.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink className="item" exact="true" to={item.route}>
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </header>

        <Routes>
          {Data.map((item, index) => {
            return (
              <Route
                exact="true"
                key={index}
                path={item.route}
                element={<ImageCard name={item.name} url={item.url} />}
              />
            );
          })}
        </Routes>

        <nav className="pagination_container">
          {Data.map((item, index) => {
            return (
              <div key={index}>
                <NavLink className="pagination" exact="true" to={item.route}>
                  {item.id}
                </NavLink>
              </div>
            );
          })}
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
