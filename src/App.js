import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChromeExtensionPage from "./pages/ChromeExtensionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChromeExtensionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
