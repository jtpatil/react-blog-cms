import React from 'react';
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from 'graphql-tag';

const Landing = ({ data: { loading, allPosts } }) => {
    if(!loading){
        return (
            <div className="posts-container">
            {allPosts.map(post => (
                <article className="content" key={post.id}>
                <div className="postImage">
                    <img src={post.image.url} alt="" />
                </div>

                <Link to={`/post/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>
                </article>
            ))}
            </div>
        );
    }
    return <h2>Loading Posts...</h2>
};

const allPosts = gql`
 query allPosts {
     allPosts {
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

 export default graphql(allPosts)(Landing);
