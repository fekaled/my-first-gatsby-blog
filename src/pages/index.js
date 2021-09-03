import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>Queremos dividir nossa experiência para ajudar a construir o seu projeto</p>
      <StaticImage
      alt="Ëdificio Boa Sorte real"
      src="../images/ed-boa-sorte.png"
      />
    </Layout>
  )
}

export default IndexPage