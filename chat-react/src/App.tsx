/** @format */

import { useState } from "react";
import "./App.scss";
import Drawer from "./components/drawer/Drawer";
import Header from "./views/header/Header";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handlerDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="app">
      <Drawer drawerToggle={handlerDrawer} drawerOpen={drawerOpen} />
      <Header drawerToggle={handlerDrawer} />
    </div>
  );
}

export default App;
