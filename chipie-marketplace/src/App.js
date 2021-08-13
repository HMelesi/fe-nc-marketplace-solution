import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Shop from './components/Shop';
import UserList from './components/UserList';
import Basket from './components/Basket';
import ItemToSell from './components/ItemToSell';
import React from 'react';
import { UserContext } from './contexts/UserContext';
import UserProfile from './components/UserProfile';
import ShopCategory from './components/ShopCategory';
import Home from './components/Home';
import CreateUser from './components/CreateUser';

function App() {
  const [user, setUser] = React.useState('Paul-R');

  React.useEffect(() => {

  }, [])

  return (
    <div className="App">
        <UserContext.Provider value={{ user, setUser}}>
          <Header/>
          <div className="content">
            <Switch>
            <Route exact path='/shop/:category'>
                <ShopCategory />
              </Route>
              <Route path='/shop'>
                <Shop/>
              </Route>
              <Route path="/users">
                <UserList/>
              </Route>
              <Route path="/basket">
                <Basket/>
              </Route>
              <Route path="/sell">
                <ItemToSell />
              </Route>
              <Route path="/create-user">
                  <CreateUser/>
              </Route>
              <Route path="/user-profile">
                  <UserProfile />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </UserContext.Provider>
    </div>
  );
}

export default App;
