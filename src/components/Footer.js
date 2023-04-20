import React from "react";

function Footer() {
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
        Search: 
        <input type="text" />
      </div>
    </div>
  );
}

export default Footer;
