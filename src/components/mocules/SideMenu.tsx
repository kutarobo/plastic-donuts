import React from 'react';
import { HeadFC, Link, graphql } from 'gatsby';

interface ISideMenuProps {
  title?: string;
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const SideMenu = ({ title, data }: ISideMenuProps) => {
  const subTitle = title ? `:: ${title}` : '';

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
    <>
      <title>Plastic Donuts {subTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
};

export default SideMenu;

export const pageQuery = graphql`
  query LeftMenuQuery {
    site {
      id
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allSite {
      edges {
        node {
          id
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            categories
            createdDate
            description
            title
            updatedDate
          }
        }
      }
    }
  }
`;
