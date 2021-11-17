import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import UserList from "./components/UserList";
import Basket from "./components/Basket";
import ItemToSell from "./components/ItemToSell";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";
import ShopCategory from "./components/ShopCategory";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";

function App() {
  const [user, setUser] = useState("Paul-R");

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/shop/:category" element={<ShopCategory />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/sell" element={<ItemToSell />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
