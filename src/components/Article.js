import React, { useState, useEffect } from "react";

function Article() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api")
      .then((response) => response.json())
      .then((json) => setStories(json.results));
  }, []);

  return (
    <div>
      <ol>
        {stories.map((story) => (
          <li key={story.id}>
            <h4>{story.created_at}</h4>
            <h4>{story.author}</h4>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Article;
