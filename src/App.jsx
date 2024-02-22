import React from "react";
import TestQuiz from "./components/TestQuiz";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
  return (
    <div>
      <Header />
      <TestQuiz />
      <Footer />
    </div>
  );
};

export default App;
