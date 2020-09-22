import React from "react"
import { Link } from "gatsby"

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Home</Link>
      <p></p>
      <Link to="/contact/">Contact</Link>
      <p></p>
      <Link to="/posts/">Posts</Link>
    </div>
  )
}