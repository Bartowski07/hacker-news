import React from "react";
import { useState,useEffect } from "react";




function Footer({setResults}) {
  
  const [input,setInput]= useState("");
  
  const fetchStories = (value) =>{
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then((response)=> response.json())
    .then((json)=>{
      const results = json.filter((story)=>{
        return value && story && story.title.toLowerCase().includes(value);
      });
      setResults(results);
    });
    
  }
  const handleChange = value =>{
    setInput(value)
    fetchStories(value)
  }

    
  return (
    <div className="footer">
      <p>Applications are open for YC Summer 2023</p>
      <ul>
        <li>Guidelines</li>
        <li>FAQ</li>
        <li>Lists</li>
        <li>API</li>
        <li>Security</li>
        <li>Legal</li>
        <li>Apply to YC</li>
        <li>Contact</li>
      </ul>
      <div id="search">
      <ol>
        {results.map((story) => (
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
        Search: 
        <input type="text" value={input} onChange={(e)=> handleChange(e.target.value)}
      
          />
       
  
      </div>
    </div>
  );
}

export default Footer;
