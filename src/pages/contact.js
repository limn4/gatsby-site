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
    </div>
  )
}
