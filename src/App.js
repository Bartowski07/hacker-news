import React from "react";
import "./style.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";


function App() {
  const [results,setResults]=useState([]);
    return (
    <div className="App">
      <Header />
      <Article />
      <Footer setResults={setResults}/>
     
    </div>
  );
}

export default App;
