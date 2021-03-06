import React from "react"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to="/">Index</Link>
      <p></p>
      <Link to="/about/">About</Link>
      <p></p>
      <Link to="/posts/">Posts</Link>
    
      
      <form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"/></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        </form>
      
    </div>
  )
}




