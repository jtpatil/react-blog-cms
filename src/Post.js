import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Post = ({ data: { loading, post } }) => {
    if(!loading){
        return (
            <article className="wrapper">
                <div className="post">
                 <h1>{post.title}</h1>
                 <img scr={post.image.url} alt="Cats" />
                 <p dangerouslySetInnerHTML = { {__html: post.description}}/>
                </div>
            </article>
        );
    }
    return <h2>Loading article ...</h2>
};

const singlePost = gql`
         query singlePost($slug: String!) {
           post: Post(slug: $slug) {
             id
             slug
             title
             description
             image {
               url
             }
           }
         }
       `;

export default graphql(singlePost, {
    options: ({match}) => ({
        variables: {
            slug: match.params.slug
        }
    })
}) (Post);
