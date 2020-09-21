import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Index from "./pages/Index";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Internet from "./pages/Internet";
import Tv from "./pages/Tv";
import Mobile from "./pages/Mobile";
import MyFriend from "./pages/MyFriend";
import Subscribe from "./pages/Subscribe";
import Customers from "./pages/Customers";
import LoginPage from "./pages/LoginPage";

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Index} />
        <Route path="/internet" component={Internet} />
        <Route path="/tv" component={Tv} />
        <Route path="/movel" component={Mobile} />
        <Route path="/indicar-amigo" component={MyFriend} />
        <Route path="/inscreva-se" component={Subscribe} />
        <Route path="/clientes" component={Customers} />
        <Route path="/login" component={LoginPage} />
        <Footer />
      </BrowserRouter>
    );
  }
}
