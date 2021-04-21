import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { details, featured, html } from "../styles/project-details.module.css"

function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
