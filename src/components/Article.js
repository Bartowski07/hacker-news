import React, { useState, useEffect } from "react";

function Article({ stories }) {
  return (
    <div className="article">
      <ol>
        {stories.map((story) => (
          <li key={story.id}>
            <h5>{story.title}</h5>
            <h5>{story.points}</h5>
            <h5>{story.num_comments}</h5>
            <h5>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.url}
              </a>
            </h5>
            <h5>{story.author}</h5>
          </li>
        ))}
      </ol>
      <div id="more">More</div>
    </div>
  );
}

export default Article;
