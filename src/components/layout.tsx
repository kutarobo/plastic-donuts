import { graphql } from "gatsby";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: 0 }}>
      <div>header</div>
      <hr />
      {children}
    </div>
  );
}

export const pageQuery = graphql`
  query TestMarkdown {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: [
        { frontmatter: { createdDate: ASC } }
        { frontmatter: { title: ASC } }
      ]
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            createdDate(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
