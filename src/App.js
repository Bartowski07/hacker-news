import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  const [stories, setStories] = useState([]);
  const [term, setTerm] = useState(null);

  useEffect(() => {
    let url = "http://hn.algolia.com/api/v1/search";
    let query = term ? `query=${term}` : "tags=front_page";

    fetch(`${url}?${query}`)
      .then((response) => response.json())
      .then((json) => setStories(json.hits))
      .catch((error) => console.log(error));
  }, [term]);

  return (
    <div className="App">
      <Header />
      <Article stories={stories} />
      <Footer term={term} setTerm={setTerm} />
    </div>
  );
}

export default App;
