import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Dashboard/Dashboard";
import Graphs from "./Graphs/Graphs";
import UserDetails from "./UserDetails/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
