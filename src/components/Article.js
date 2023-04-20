import React, { useState, useEffect } from "react";

function Article() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => response.json())
      .then((json) => setStories(json.hits))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="article">
      <ol>
        {stories.map((story) => (
          <li key={story.id}>
            <h4>{story.title}</h4>
            <h4>{story.points}</h4>
            <h4>{story.num_comments}</h4>
            <h4>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.url}
              </a>
            </h4>
            <h4>{story.author}</h4>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Article;
