import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/layout'
import '../styles/global.scss'

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main style={pageStyles}>Test</main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>plastic donuts</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  )
}
