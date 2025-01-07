import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';

const styles = {
  wrapper: {
    margin: '0 auto',
    padding: 0,
  },
  header: {
    height: '3rem',
    borderBottom: '1px solid lightGray',
    display: 'grid',
  },
};
export default function Layouts({ children }: { children: ReactNode }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div>백버튼</div>
        <div>타이틀 영역</div>
        <div>햄부기버튼</div>
      </div>
      <div>{children}</div>
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
