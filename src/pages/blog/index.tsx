import * as React from 'react';
import { Link, graphql } from 'gatsby';

interface Props {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: Props) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      {posts.map(({ node }: { node: any }) => {
        const title = node.frontmatter.title; //|| node.fields.slug;
        return (
          <div key={/*node.fields.slug*/ Math.random()}>
            <h3>
              <Link
                style={{ boxShadow: `none` }}
                to={/*node.fields.slug*/ 'haha'}
              >
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.createdDate}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

/*
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        createdDate(formatString: "MMMM DD, YYYY")
        categories
        title
      }
    }
  }
`;
*/

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
//   fields {
//     slug
//   }
