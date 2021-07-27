import React from "react";
import styled from "@emotion/styled";
import PostCover from "./post-cover";
import PostContent from "./post-content";
import Related from "../../components/related";
import usePosts from "../../hooks/usePosts";

const Post = ({ post })=>{

    const posts = usePosts();

    const relatedPosts = posts.filter( item => item.id !== post.id).slice(0,3);

    return(
        
        <Article key={post.id}>
            <PostCover {...{ post }}/>
            <PostContent {...{ post }}/>
            <Related items={relatedPosts} />
        </Article>
    )
}

export default Post;

const Article = styled.article``;
