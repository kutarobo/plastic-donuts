import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import { Grid, Typography } from '../index';

const styles = {
  wrapper: {
    margin: '0 auto',
    padding: 0,
  },
  header: {
    height: '3rem',
    borderBottom: '1px solid lightGray',
    display: 'grid',
    gridTemplateColumns: '3rem auto 3rem',
    padding: '0.2rem',
  },
  headerItem: {
    alignContent: 'center',
    justifySelf: 'center',
  },
};
export default function Layouts({ children }: { children: ReactNode }) {
  return (
    <Grid style={styles.wrapper}>
      <Grid style={styles.header}>
        <Grid style={styles.headerItem}>백버튼</Grid>
        <Grid style={styles.headerItem}>
          <Typography>타이틀 영역</Typography>
        </Grid>
        <Grid style={styles.headerItem}>햄부기버튼</Grid>
      </Grid>
      <Grid>{children}</Grid>
    </Grid>
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
