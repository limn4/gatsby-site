import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (<div>
    <h1>Home Page</h1>
    <Link to="/about/">About</Link>
    <p></p>
    <Link to="/contact/">Contact</Link>
    <p></p>
    <Link to="/posts/">Posts</Link>
  </div>)
}
