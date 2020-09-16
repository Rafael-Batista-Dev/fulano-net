import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import Internet from "./pages/Internet";
import Tv from "./pages/Tv";
import Mobile from "./pages/Mobile";
import MyFriend from "./pages/MyFriend";
import Subscribe from "./pages/Subscribe";
import Customers from "./pages/Customers";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/internet" component={Internet} />
        <Route path="/tv" component={Tv} />
        <Route path="/movel" component={Mobile} />
        <Route path="/indicar-amigo" component={MyFriend} />
        <Route path="/inscreva-se" component={Subscribe} />
        <Route path="/clientes" component={Customers} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
