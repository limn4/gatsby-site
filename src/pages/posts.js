import React from "react"
import { Link } from "gatsby"

export default function Posts() {
  return (
    <div>
        <h1>Posts Page</h1>
        <Link to="/">Index</Link>
        <p></p>
        <Link to="/contact/">Contact</Link>
        <p></p>
        <Link to="/posts/">Posts</Link>
    </div>
  )
}
