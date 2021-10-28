import React from "react";
import styled from "@emotion/styled";
import PostCover from "./post-single-cover";
import PostContent from "./post-single-content";

const Post = ({ post })=>{

    return(
        
        <Article key={post.id}>
            <PostCover {...{ post }}/>
            <PostContent {...{ post }}/>
        </Article>
    )
}

export default Post;

const Article = styled.article``;
