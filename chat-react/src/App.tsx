/** @format */

import { useState } from "react";
import "./App.scss";
import Drawer from "./components/drawer/Drawer";
import InputMessage from "./components/input/InputMessage";
import Modal from "./components/modal/Modal";
import Header from "./views/header/Header";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);

  const handlerDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="app">
      {viewModal && <Modal setView={setViewModal} />}
      <Drawer
        drawerToggle={handlerDrawer}
        drawerOpen={drawerOpen}
        setView={setViewModal}
      />
      <Header drawerToggle={handlerDrawer} />
      <InputMessage />
    </div>
  );
}

export default App;
