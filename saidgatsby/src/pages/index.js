import React from "react"
import Layout from "../components/Layout"
import { header } from "../styles/home.module.css"

function Home() {
  return (
    <Layout>
      <section className={header}>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX designer & web developer based in Jakarta</p>
      </section>
    </Layout>
  )
}

export default Home
