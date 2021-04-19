import React from "react"
import Layout from "../../components/Layout"
import { portfolio, proyek } from "../../styles/project.module.css"
import { Link, graphql } from "gatsby"

const Projects = ({ data }) => {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={proyek}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
        }
        id
      }
    }
  }
`
