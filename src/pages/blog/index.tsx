import * as React from 'react';
import { HeadFC, Link, graphql } from 'gatsby';
import Layouts from '../../components/layouts/Layouts';
import Header from '../../components/Header';

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

  const BlogLists = () => {
    return posts.map(({ node }: { node: any }) => {
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
    });
  };

  return (
    <Layouts>
      <div>
        <BlogLists />
        <BlogLists />
        <BlogLists />
        <BlogLists />
      </div>
    </Layouts>
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

export const Head: HeadFC = () => {
  return <Header title="Home" />;
};
