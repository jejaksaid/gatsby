import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/project.module.css"

function Projects() {
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & webs i've created</h3>
      </div>
    </Layout>
  )
}

export default Projects
